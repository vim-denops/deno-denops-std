import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { decode, encode } from "./utils.ts";

Deno.test("encode does nothing on alphabet characters", () => {
  const src = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
  const dst = encode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("encode does nothing on numeric characters", () => {
  const src = "1234567890";
  const dst = encode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("encode does nothing on the percent character", () => {
  const src = "%";
  const dst = encode(src);
  const exp = "%";
  assertEquals(dst, exp);
});
Deno.test('encode encodes some symbol characters ("<>|?*)', () => {
  const src = " !\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~";
  const dst = encode(src);
  const exp = " !%22#$%&'()%2A+,-./:;%3C=%3E%3F@[\\]^`{%7C}~";
  assertEquals(dst, exp);
});
Deno.test("encode does nothing on 日本語", () => {
  const src =
    "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす";
  const dst = encode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("encode does nothing on emoji (🥃)", () => {
  const src = "🥃";
  const dst = encode(src);
  const exp = src;
  assertEquals(dst, exp);
});

Deno.test("decode does nothing on alphabet characters", () => {
  const src = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
  const dst = decode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("decode does nothing on numeric characters", () => {
  const src = "1234567890";
  const dst = decode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("decode decodes encoded the percent character", () => {
  const src = "%25";
  const dst = decode(src);
  const exp = "%";
  assertEquals(dst, exp);
});
Deno.test("decode decodes encoded the percent character (only once)", () => {
  const src = "%2520";
  const dst = decode(src);
  const exp = "%20";
  assertEquals(dst, exp);
});
Deno.test('decode decodes encoded characters ("<>|?*)', () => {
  const src = " !%22#$%&'()%2A+,-./:;%3C=%3E%3F@[\\]^`{%7C}~";
  const dst = decode(src);
  const exp = " !\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~";
  assertEquals(dst, exp);
});
Deno.test("decode does nothing on 日本語", () => {
  const src =
    "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす";
  const dst = decode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("decode does nothing on emoji (🥃)", () => {
  const src = "🥃";
  const dst = decode(src);
  const exp = src;
  assertEquals(dst, exp);
});
Deno.test("decode decodes encoded 日本語", () => {
  const src = encodeURIComponent(
    "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす",
  );
  const dst = decode(src);
  const exp =
    "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす";
  assertEquals(dst, exp);
});
Deno.test("decode decodes encoded emoji (🥃)", () => {
  const src = encodeURIComponent("🥃");
  const dst = decode(src);
  const exp = "🥃";
  assertEquals(dst, exp);
});
