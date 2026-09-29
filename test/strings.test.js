import assert from "node:assert/strict";
import { test } from "node:test";
import { trim } from "../src/strings.js";

test("trim quita espacios", () => {
  assert.equal(trim("  hola "), "hola");
});
