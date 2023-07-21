// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

const fiboNacci = (num) => {
  let serie = [0, 1];

  let resultado;
  for (let i = 2; i < num; i++) {
    resultado = parseInt(serie[i - 2]) + parseInt(serie[i - 1]);
    serie.push(resultado);

    //const element = array[index];
  }
  return serie;
  //return num;
};
let fb = fiboNacci(6);
console.log(fb);

const fibonacciSeries = (n) => {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibonacciArr = [0, 1];
    for (let i = 2; i < n; i++) {
      const nextNum = fibonacciArr[i - 1] + fibonacciArr[i - 2];
      fibonacciArr.push(nextNum);
    }
    return fibonacciArr;
  }
};

// Ejemplo de uso:
const number = 6;
const fibonacciNumbers = fibonacciSeries(number);
console.log(fibonacciNumbers);
