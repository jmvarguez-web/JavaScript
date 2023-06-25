// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let numero = 10;
let factorial = 1;
let i = 1;

console.log(
  "factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while\n"
);

while (i <= numero) {
  factorial *= i;
  console.log(factorial + "\n");
  i++;
}
console.log("El factorial de " + numero + " es: " + factorial);
