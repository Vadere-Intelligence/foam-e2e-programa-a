// Utilidades de texto mínimas.

/** Devuelve el texto sin espacios al principio ni al final. */
export function trim(text) {
  return String(text).trim();
}

/** Devuelve el texto con el primer carácter en mayúscula y el resto sin cambios. */
export function capitalize(text) {
  const value = String(text);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** Devuelve el texto con cada palabra (separada por un espacio) capitalizada. */
export function titleCase(text) {
  return String(text).split(" ").map(capitalize).join(" ");
}
