// Crea un archivo JS que contenga las siguientes líneas
//
// - Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
  return true;
}

async function asyncFunction() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hola soy una promesa");
      resolve();
    }, 5000);
  });
}

asyncFunction();

async function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hola soy una promesa 2");
      resolve();
    }, 4000);
  });
}
resolveAfter2Seconds(50000);

//
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

/* 
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
 */
// async await
// - Una función generadora de índices pares automáticos

// Función generadora de índices pares automáticos
function* indicePares() {
  let index = 0;
  while (true) {
    yield index;
    index += 2;
  }
}

const pares = indicePares();

console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
