// Crea un archivo JS que contenga las siguientes líneas
//

// - Una variable que contenga tu altura en centímetros (entero)
//
var alturaCentimetros = 178;
console.log("Altura en centímetros: " + alturaCentimetros);
// - Una variable que contenga tu altura en metros (número de coma flotante)
//
var alturaMetros = alturaCentimetros / 100;
console.log("Altura en metros: " + alturaMetros);
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
//
var pesoKilogramos = 117.8;
console.log("Peso en kilogramos: " + pesoKilogramos);
// - Una variable que contenga tu altura en metros redondeada hacia arriba
//
var alturaMetrosRedondeada = Math.ceil(alturaMetros);
console.log(
  "Altura en metros redondeada hacia arriba: " + alturaMetrosRedondeada
);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
//
var pesoKilogramosRedondeado = Math.floor(pesoKilogramos);
console.log(
  "Peso en kilogramos redondeado hacia abajo: " + pesoKilogramosRedondeado
);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

var esIgual = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(
  "¿El máximo valor + 1 es igual al máximo valor en JavaScript? " + esIgual
);
