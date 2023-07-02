// Crea un archivo llamado fechas.js que contenga las siguientes líneas
//
// - La fecha de hoy
const fecha = new Date();
console.log(fecha);
let text = fecha.toLocaleDateString("es-MX");
console.log(text);

// - La fecha de tu nacimiento
const fechaNacimiento = new Date("1985-08-25");
console.log(fechaNacimiento);
const nacimiento = new Date("Aug 25, 1985");
console.log(nacimiento);
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

console.log(fecha.getTime() > fechaNacimiento.getTime());

// - Una variable que contenga el día de tu nacimiento
var diaANacimiento = fechaNacimiento.getDate() + 1;
console.log(diaANacimiento);
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
var mesANacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesANacimiento);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
var anioANacimiento = fechaNacimiento.getFullYear();
console.log(anioANacimiento);
