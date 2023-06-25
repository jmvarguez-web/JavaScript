// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numero = 10;
let factorial = 1;
let i = 1;

console.log(
  "factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break\n"
);

while (true) {
  if (i <= numero) {
    factorial *= i;
    console.log(factorial + "\n");
    i++;
  } else {
    break;
  }
}
console.log("El factorial de " + numero + " es: " + factorial);
