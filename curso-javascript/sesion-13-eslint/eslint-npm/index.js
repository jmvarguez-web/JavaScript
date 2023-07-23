// Crea un nuevo proyecto de Node

// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

// - Duplica el archivo del ejercicio de la sesión 04-Textos

// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

// - Crea el fichero .eslintrc.json

// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

// - Crea un script en el package.json para corregir automáticamente todos los errores

// - Ejecuta el script a través del terminal
// Este es el archivo que vamos a utilizar

const nombre = "Gorka";
const persona4 = "Jesus";
/* eslint-disable */

const persona2 = "Maria";
const persona5 = "Jesus";

/* eslint-enable */

// En esta línea quiero tener comillas simples (quiero que me desactives la regla de las comillas dobles)
const nuevoString = "Esto es un nuevo string"; // eslint-disable-line

/* eslint-disable-next-line indent */
const string2 = "Más strings";

console.log("Hola");
console.log("Hola");
const persona3 = "Maria";

const nombre3 = "Julián";

console.log(4);
