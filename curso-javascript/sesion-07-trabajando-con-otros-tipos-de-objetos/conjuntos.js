// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familia = ["Jesus", "Margarita", "Jorge", "Lizzeth", "Candida"];

const setFamila = new Set(familia);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamila.add("Jesus");
console.log(setFamila);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamila.add("JavaScript");
console.log(setFamila);
