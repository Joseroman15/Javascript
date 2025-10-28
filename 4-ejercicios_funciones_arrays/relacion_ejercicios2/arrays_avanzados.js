// Ejercicio 8: Crea una función que reciba un array de valores enteros (positivos y negativos), y
// devuelva otro array con la suma parcial de cada elemento del array que se pasa como parámetro.
// Define el array y sus valores en código.

function ej8() {
  let numeros = [1, 2, 3, 4, 5, 6];
  let suma = 0;

  function sumaParcial(numero) {
    suma += numero;
    return suma;
  }

  let arraySuma = numeros.map(sumaParcial);
  console.log(arraySuma);
}

// Ejercicio 9: Crea una función llamada countBy la cual recibirá dos números enteros positivos:
// X e Y. Esta función debe devolver lo siguiente:

// - Si alguno de los números es negativo devolverá un array vacío.
// - Si no, devolverá un array con los Y primeros múltiplos de X empezando por el
// 1 (incluido)
// Ej: Para la entrada X=-2, Y=4, el array resultante será [] (vacío)
// Ej: Para la entrada X=2, Y=4, el array resultante será [2,4,6,8]

function ej9() {
  function countBy(x, y) {
    let multiplos = [];
    let cont = 0;
    if (x > 0 && y > 0) {
      let aux = 1;
      do {
        if (aux % x == 0) {
          multiplos.push(aux);
          cont++;
        }
        aux++;
      } while (cont < y);
    }
    return multiplos;
  }
  console.log(countBy(2, 5));
}

// Ejercicio 10: Escribe una función “listar” que reciba como argumento un array y que devuelva
// una cadena de caracteres formada por los elementos del array separados por un guión (-).
// Puedes usar métodos para arrays.

// Ejemplo:
// Si defino un array como:
// miArray = [“rojo", "verde", "azul"];
// Y llamo a la función listar (miArray) debe devolvernos una cadena de caracteres "rojo-verde

function ej10() {
  let colores = ["Rojo", "Verde", "Azul", "Marron"];

  function listar(lista) {
    return lista.join("-");
  }

  console.log(listar(colores));
}

// Ejercicio 11: Pide al usuario que escriba una frase
// Ejemplo: frase = "JavaScript es un lenguaje versátil y poderoso"
// - Conviértela en un array de cadenas
// - Luego, invierte el orden de las palabras y agrega una nueva palabra al principio del
// array.
// - Finalmente, vuelve a convertir el array en una cadena, separando las palabras con
// comas.
// - Muestra la cadena resultante.

function ej11() {
  let frase = prompt("Introduce una frase!");

  // 1 parte
  let arrayFrase = frase.split(" ");

  // 2 parte
  arrayFrase.reverse();

  arrayFrase.unshift("Anonimo:");

  // 3 parte
  frase = arrayFrase.join(",");
  console.log(frase);
}

// Ejercicio 12: Escriba una función que reciba dos arrays y devuelva un nuevo array con
// los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
// array). El orden debe ser: primero los que están en el primer array y luego los que están
// en el segundo.

// Ejemplos:
// [1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]

function ej12() {
  let lista1 = [1, 2, 3, 3];
  let lista2 = [3, 2, 1, 4, 5];

  // Función que cuenta cuántas veces aparece un elemento en un array
  function contar(array, valor) {
    return array.filter((x) => x === valor).length;
  }

  // Filtramos los elementos de lista1 que aparecen solo 1 vez en total
  let unicos1 = lista1.filter(
    (num) => contar(lista1, num) + contar(lista2, num) === 1
  );

  // Filtramos los elementos de lista2 que aparecen solo 1 vez en total
  let unicos2 = lista2.filter(
    (num) => contar(lista1, num) + contar(lista2, num) === 1
  );

  // Unimos los arrays: primero lista1, luego lista2
  let resultado = unicos1.concat(unicos2);

  console.log(resultado);
}

ej12(); // [4, 5]

// Ejercicio 13: Dado un array de números enteros que representa una lista de puntuaciones en
// un juego (genéralo por código), realiza las siguientes operaciones:

// 1. Elimina las tres puntuaciones más bajas del array.

// 2. Inserta tres nuevas puntuaciones proporcionadas por el usuario en las posiciones 2, 4
// y 6 del array.

// 3. Después de las inserciones, elimina una cantidad de elementos indicada por el
// usuario, comenzando desde una posición que el usuario elija.

function ej13() {
  let puntuaciones = [10, 5, 4, 8, 9, 7, 2];

  //parte 1

  puntuaciones.sort((a, b) => a - b);
  puntuaciones.splice(0, 3);

  //parte 2

  for (let i = 2; i <= 6; i += 2) {
    let eleccion = parseInt(prompt("Introduce numero para la pos" + i));
    puntuaciones.splice(i, 0, eleccion);
  }

  //parte 3

  let cantidad = parseInt(prompt("Cantidad de elementos que desea borrar!"));
  let posini = parseInt(
    prompt("Introduce la posicion desde la que desea borar!")
  );

  puntuaciones.splice(posini, cantidad);

  console.log(puntuaciones);
}
