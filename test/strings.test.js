import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize, isBlank, titleCase, trim } from "../src/strings.js";

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

test("isBlank devuelve true para cadena vacía", () => {
  assert.equal(isBlank(""), true);
});

test("isBlank devuelve true para cadena solo con espacios", () => {
  assert.equal(isBlank("   "), true);
});

test("isBlank devuelve false para texto no vacío", () => {
  assert.equal(isBlank("a"), false);
});
