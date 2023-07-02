// Crea un archivo JS que contenga las siguientes líneas
//
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Queso", "Huevos", "Carne", "Leche", "Jamon"];
console.log(listaCompras);
//
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");
console.log(listaCompras);
//
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop("Aceite de Girasol");
console.log(listaCompras);
//
//
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
  {
    titulo: "Viaje a la Luna",
    director: "Georges Méliès",
    fecha: "1902",
  },
  {
    titulo: "Star Wars: Episodio VII - El despertar de la Fuerza",
    director: "J. J. Abrams",
    fecha: "2015",
  },
  {
    titulo: "El libro de la selva",
    director: "Jon Favreau",
    fecha: "2016",
  },
];

console.log(listaPeliculas);

//
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = listaPeliculas.filter(
  (pelicula) => pelicula.fecha > 2010
);
console.log(peliculasPosteriores);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const peliculasDirectores = listaPeliculas.map((pelicula) => pelicula.director);
console.log(peliculasDirectores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculasTitulos = listaPeliculas.map((pelicula) => pelicula.titulo);
console.log(peliculasTitulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaNueva = peliculasDirectores.concat(peliculasTitulos);
console.log(listaNueva);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propagacion = [...peliculasDirectores, ...peliculasTitulos];
console.log(propagacion);
