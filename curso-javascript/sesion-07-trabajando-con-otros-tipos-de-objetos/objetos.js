// Crea un archivo llamado objetos.js que contenga las siguientes líneas
//
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
  nombre: "Jesus Manuel",
  apellido: "Varguez Basto",
  edad: 37,
  altura: 178,
  eresDesarrollador: true,
};

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datosPersonales.edad;
console.log(edad);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonasmigo = {
  nombre: "Manuel Jesus",
  apellido: "Sanchez Aguilar",
  edad: 27,
  altura: 168,
  eresDesarrollador: true,
};
const datosPersonasmigo2 = {
  nombre: "Luis Manuel",
  apellido: "Sanchez santos",
  edad: 7,
  altura: 180,
  eresDesarrollador: true,
};

const lista = [datosPersonales, datosPersonasmigo, datosPersonasmigo2];
console.log(lista);
//
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

lista.sort((a, b) => a.edad - b.edad);

console.log(lista);
