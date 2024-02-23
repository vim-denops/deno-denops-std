import {
  fromFileUrl,
  toFileUrl,
} from "https://deno.land/std@0.217.0/path/mod.ts";
import { intersection } from "https://deno.land/x/set_operations@v1.1.1/mod.ts";

interface ModuleInformation {
  sourcePath: string;
  sourceText: string;
  functions: Set<string>;
}

function extractExportModulePaths(
  sourcePath: string,
  sourceText: string,
): string[] {
  const baseUrl = new URL("./", toFileUrl(sourcePath));
  return [...sourceText.matchAll(/^export \* from "(?<url>.*)"/gm)].map((
    [, url]: string[],
  ) => fromFileUrl(new URL(url, baseUrl)));
}

function extractExportFunctions(sourceText: string): Set<string> {
  return new Set(
    [...sourceText.matchAll(
      /^export\s+(?:async\s+)?function\s+(?:\*\s*)?(?<name>\w+)/gms,
    )].map(([, name]: string[]) => name),
  );
}

async function findExportModules(
  sourcePath: string,
): Promise<ModuleInformation[]> {
  const sourceText = await Deno.readTextFile(sourcePath);
  const modules = extractExportModulePaths(sourcePath, sourceText);
  const descendants = await Promise.all(modules.map(findExportModules));
  const functions = extractExportFunctions(sourceText);
  return [
    { sourcePath, sourceText, functions },
    ...descendants.flat(),
  ].filter(({ functions }) => functions.size > 0);
}

function replaceFunctionDocs(
  sourceText: string,
  fnJSDocs: Map<string, string>,
): string {
  const reLeading = /(?<leading>\s*)/.source;
  const reJSDoc = /(?:\/\*\*[^/](?:[^*]|\*[^/])*\*\/)?/.source;
  const reLineComments = /(?:\s|\/\/[^\n]*\n)*/.source;
  const reFunction =
    /^export\s+(?:async\s+)?function\s+(?:\*\s*)?(?<name>\w+)/.source;
  const reDef = `(?<def>${reLineComments}${reFunction})`;
  const reFunctions = new RegExp(`${reLeading}${reJSDoc}${reDef}`, "gms");
  const fnReplaced = new Set<string>();
  return sourceText.replaceAll(reFunctions, (prev, ...args) => {
    const { leading, def, name } = args.at(-1) as Record<string, string>;
    const jsdoc = fnJSDocs.get(name);
    if (jsdoc && !fnReplaced.has(name)) {
      fnReplaced.add(name);
      return `${leading}${jsdoc}${def}`;
    }
    return prev;
  });
}

/**
 * Overwrite the source file by replacing the JSDoc in the export functions.
 * Everything except JSDoc is kept.
 * Files referenced by `export * from "..."` are replaced recursively.
 *
 * @param rootSourcePath - origin source file path
 * @param fnJSDocs - Map of function names to JSDoc
 */
export async function transform(
  rootSourcePath: string,
  fnJSDocs: Map<string, string>,
): Promise<void> {
  const fnNames = new Set(fnJSDocs.keys());
  const informations = await findExportModules(rootSourcePath);
  for (const { sourcePath, sourceText, functions } of informations) {
    if (intersection(functions, fnNames).size > 0) {
      const transformed = replaceFunctionDocs(sourceText, fnJSDocs);
      await Deno.writeTextFile(sourcePath, transformed);
    }
  }
}
