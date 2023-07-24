// Crea un nuevo proyecto de Node

// - Crea un fichero index.html (utiliza el comando "!")

// - Crea un fichero index.js

// - Integra el fichero index.js en el html

// - En el fichero index.js:

// - Crea una variable con tu nombre
let nombre = "Jesus";
// - Crea una variable con tu apellido
let apellido = "Varguez Basto";
// - Crea un objeto con tu nombre y tu apellido
const objNombre = {
  nombre: nombre,
  apellido: apellido,
};
const obj = JSON.stringify(objNombre);
// - Almacena el objeto anterior en la SessionStorage
// Almacena la información en sessionStorage
//sessionStorage.setItem("datosSession", obj);

// Obtiene la información almacenada desde sessionStorage
var data = sessionStorage.getItem("datosSession");

// - Almacena el objeto anterior en la LocalStorage

//localStorage.setItem("datosStorage", obj);
var cat = localStorage.getItem("datosStorage");

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
//document.cookie = `objcookie=${obj}; max-age=120`;

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado
