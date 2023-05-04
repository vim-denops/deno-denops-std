import { transform as transformSource } from "../transform.ts";
import { formatDocs } from "./format.ts";
import type { Option } from "./types.ts";

export function transform(
  rootSourcePath: string,
  options: Option[],
): Promise<void> {
  const fnJSDocs = new Map(
    options.map(({ name, docs }) => [name, formatDocs(docs).join("\n")]),
  );
  return transformSource(rootSourcePath, fnJSDocs);
}
