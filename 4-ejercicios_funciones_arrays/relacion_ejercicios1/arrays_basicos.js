// Ejercicio 1: Escribe una función que sume todos los elementos de un array de números.

// - Define un array de 5 elementos.

// - Pide al usuario los valores correspondientes a cada uno de los elementos del array

// - Muestra la suma de dichos elementos. Calcula la suma recorriendo el array y
// muéstrala por consola

function ej1() {
  let lista = new Array(5);
  let total = 0;

  for (let i = 0; i < lista.length; i++) {
    lista[i] = parseInt(prompt(`Introduce numero entero para las pos ${i}`));
  }

  function sumatorio(numero) {
    total += numero;
  }

  lista.forEach(sumatorio);

  console.log(total);
}

// Ejercicio 2: Crea una función que encuentre el número mayor en un array de números.

// - Define un array de 5 elementos.
// - Inicialízalo en el propio código con los valores que desees
// - Saca por consola el número mayor

function ej2() {
  let numeros = [10, 5, 4, 7, 8];
  let mayor = 0;

  function mayornum(numero) {
    if (numero > mayor) {
      mayor = numero;
    }
  }

  numeros.forEach(mayornum);

  console.log(mayor);
}

// Ejercicio 3: Escribe una función que cuente cuántas veces aparece un número específico
// dentro de un array.

// - Define un array del número de elementos que quieras.
// - Inicialízalo en el propio código con los valores que desees.
// - Escribe una función contarElementos que tome el array y un número y devuelva por
// consola cuántas veces aparece ese número en el array

function ej3() {
  let numeros = [1, 2, 5, 2, 2, 3];
  let cont = 0;

  function contar(numero) {
    if (numero === 2) {
      cont++;
    }
  }

  numeros.forEach(contar);
  console.log(cont);
}

// Ejercicio 4: Escribe una función que verifique si todos los elementos de un array son
// números pares.

// - Define un array del número de elementos que quieras.
// - Inicialízalo en el propio código con los valores que desees.
// - Escribe una función todosPares que reciba un array y devuelva true si todos sus
// elementos son pares, y false si no lo son. Muéstralo por consola.

function ej4() {
  let numeros = [2, 2, 4, 6, 8];

  function todosPares(numero) {
    return numero % 2 == 0;
  }

  console.log(numeros.every(todosPares));
}

// Ejercicio 5: Diseña un script que vaya pidiendo números y guardándolos en un array. Una
// vez lleno mostrará el array y deberá decir cuántos números son pares y cuantos son impares.
// La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

function ej5() {
  let numeros = [];
  let elemento;

  do {
    elemento = parseInt(
      prompt(
        "Introduce un numero entero para el array (Para dejar de rellenar el array teclea 0 o valor no numerico!)"
      )
    );
    if (elemento != 0 && !isNaN(elemento)) {
      numeros.push(elemento);
    }
  } while (elemento != 0 && !isNaN(elemento));

  function pares(numero) {
    return numero % 2 == 0;
  }

  function impares(numero) {
    return numero % 2 != 0;
  }

  console.log(numeros);

  let numpares = numeros.filter(pares);
  let numimpares = numeros.filter(impares);

  console.log(
    `Hay ${numpares.length} numeros pares y ${numimpares.length} numeros impares!`
  );
}

// Ejercicio 6: Escribe una función que determina si la letra que se le pasa como argumento se
// encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

function ej6() {
  let letras = ["a", "b", "d", "e", "z", "y"];

  let argumento = "c";

  function buscarLetras(letra) {
    return letra === argumento;
  }

  console.log(letras.some(buscarLetras));
}

// Ejercicio 7: Escribe una función “listar” que reciba como argumento un array y que devuelva
// una cadena de caracteres formada por los elementos del array separados por un guión (-).

// Ejemplo:
// Si defino un array como:
// miArray = new Array ("rojo", "verde", "azul");

// Y llamo a la función listar (miArray) debe devolvernos una cadena de caracteres "rojo-verde-
// azul"

function ej7() {
  let frase = ["Hola", "soy", "una", "persona"];

  function listar(lista) {
    let cadena = lista.join("-");
    return cadena;
  }

  console.log(listar(frase));
}
