import { transform as transformSource } from "../transform.ts";
import { formatDocs } from "./format.ts";
import type { Definition } from "./types.ts";

export function transform(
  rootSourcePath: string,
  definitions: Definition[],
): Promise<void> {
  const fnJSDocs = new Map(
    definitions.map(({ fn, docs }) => [fn, formatDocs(docs).join("\n")]),
  );
  return transformSource(rootSourcePath, fnJSDocs);
}
