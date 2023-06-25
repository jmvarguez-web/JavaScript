// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numeroFactorial = 10;
let factorial = 1;
console.log(
  "factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for\n"
);
console.log("La factorial de " + numeroFactorial + " es:");
for (let i = 1; i <= numeroFactorial; i++) {
  factorial *= i;
  console.log(factorial + "\n");
}
console.log("El factorial de " + numeroFactorial + " es: " + factorial);
