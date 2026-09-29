import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, titleCase, trim } from "../src/strings.js";

test("trim quita espacios", () => {
  assert.equal(trim("  hola "), "hola");
});

test("capitalize pone en mayúscula el primer carácter", () => {
  assert.equal(capitalize("hola"), "Hola");
});

test("capitalize deja igual una palabra ya capitalizada", () => {
  assert.equal(capitalize("Hola"), "Hola");
});

test("capitalize devuelve cadena vacía para cadena vacía", () => {
  assert.equal(capitalize(""), "");
});

test("titleCase capitaliza cada palabra", () => {
  assert.equal(titleCase("hola mundo feliz"), "Hola Mundo Feliz");
});

test("titleCase devuelve cadena vacía para cadena vacía", () => {
  assert.equal(titleCase(""), "");
});
