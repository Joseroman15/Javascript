//funcion para mostrar una matriz bonita

function matrizBonita(matriz) {

  for (let i = 0; i < matriz.length; i++) {
    let fila = ""; //Ponemos una cadena vacia para cada fila
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] < 10) {
        fila += "0" + matriz[i][j] + " ";
      } else {
        fila += matriz[i][j] + " "; //Concatenamos el valor del array con filas y un espacio detras para darle formato
      }
    }
    console.log(fila);
  }
}


function ej1() {
  let num;

  do {
    num = parseInt(
      //Creamos un do while para controlar que el num sea entre 2 y 5 y es un numero
      prompt("Introduce numero entero de entre 2 y 5 para tamaño de la matriz")
    );
  } while (num < 2 || num > 5 || isNaN(num));

  let tabla = []; //Creamos el array
  let cont = 1;
  let mult;

  for (let i = 0; i < num; i++) {
    //Hacemos bucle for para rellenar el array de arrays
    tabla[i] = [];
    for (let j = 0; j < num; j++) {
      //Recorremos las columnas y las filas
      mult = num * cont; //multiplicamos el numeros por el cont 10
      if (mult < 10) {
        //Menor a 10 se le añade un 0 delante (Visual)
        tabla[i][j] = "0" + mult;
      } else {
        tabla[i][j] = mult; //SIno se añade el numero sin nada
      }
      cont++; //Suma contador al final
    }
  }

  console.log(tabla); //Mostramos la matriz por consola
  return tabla;
}

ej1();

// Ejercicio 18: Utiliza la matriz resultante del ejercicio anterior y calcula la suma de todos sus
// elementos mostrando el resultado por consola.

function ej2(array) {
  let tabla2 = array; //metemos la matriz en otra para mas claridad
  let sumatorio = 0;

  for (let i = 0; i < tabla2.length; i++) {
    for (let j = 0; j < tabla2[i].length; j++) {
      sumatorio += parseInt(tabla2[i][j]); //Sumamos el valor de cada pos de la matriz
    }
  }

  console.log(sumatorio);
}

ej2(ej1()); //Llamamos a la funcion ej1() para que nos devuelva el valor de la matriz


// Ejercicio 19: Define un array bidimensional de tamaño NxN y guárdalo en una variable
// llamada Matriz. Este valor N será introducido por el usuario (mediante prompt) y deberá estar
// comprendido entre 2 – 5 (incluidos).

// Rellena la Matriz con valores aleatorios entre 1 y 20 y muéstrala por consola

// Crea un array de 2 dimensiones y añade en la fila 0 todos los elementos de la fila 0 de
// matriz y en la fila 1 todos los elementos de fila 1 de matriz. Muestra el array
// bidimensional por consola siguiendo las reglas del ejercicio 15. Nota: Usa bucles


function ej3() {

  let n;
  let matriz = [];

  do {
    n = parseInt(prompt("Introduce numero del 2 al 5 (Incluidos)"));
  } while (n < 2 || n > 5 || isNaN(n));

  for (let i = 0; i < n; i++) { //Apartado 1
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
      matriz[i][j] = parseInt(Math.random() * (21 - 1) + 1); //21 para que llegue a 20
    }
  }
  matrizBonita(matriz); 

  let nuevaMatriz = [];

  for (let k = 0; k < 2; k++) { //Apartado 2
    nuevaMatriz[k] = [];
    for (let m = 0; m < matriz[k].length; m++) {
      nuevaMatriz[k][m] = matriz[k][m];
    }
  }
  matrizBonita(nuevaMatriz); 

}

ej3();
