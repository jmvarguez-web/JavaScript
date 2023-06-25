// Crea un archivo JS que contenga las siguientes líneas
//
// - Una cadena de texto con tu Nombre
let Nombre = "Jesus Manuel";
console.log(Nombre);
//
// - Otra cadena de texto con tu Apellido
let Apellido = "Varguez Basto";
console.log(Apellido);
//
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = Nombre + " " + Apellido;
console.log(estudiante);
//
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
//
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
//
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLeras = estudiante.length;
console.log(numeroLeras);
//
// - Una variable que contenga la primera letra del Nombre
let primerLetra = Nombre.charAt(0);
console.log(primerLetra);
//
// - Otra variable que contenga la última letra del Apellido
let ultimaLetra = Nombre.charAt(Nombre.length - 1);
console.log(ultimaLetra);
//
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminaEspacio = estudiante.replace(/\s/g, "");
console.log(eliminaEspacio);

//
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

var nombreContenido = estudiante.includes(Nombre);
console.log(nombreContenido);
