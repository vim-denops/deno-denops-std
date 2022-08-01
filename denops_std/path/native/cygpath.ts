import type { Denops } from "https://deno.land/x/denops_core@v3.1.0/mod.ts";
import { LRU } from "https://deno.land/x/lru@1.0.2/mod.ts";

const cache = new LRU<string>(500);

export async function to(denops: Denops, p: string): Promise<string> {
  let value = cache.get(p);
  if (value) {
    return value;
  }
  value = await denops.eval(`trim(system(printf("cygpath -m '%s'", path)))`, {
    path: p,
  }) as string;
  cache.set(p, value);
  return value;
}

export async function from(denops: Denops, p: string): Promise<string> {
  let value = cache.get(p);
  if (value) {
    return value;
  }
  value = await denops.eval(`trim(system(printf("cygpath -u '%s'", path)))`, {
    path: p,
  }) as string;
  cache.set(p, value);
  return value;
}
