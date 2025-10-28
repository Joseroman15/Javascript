function ej1() {
  let metros;
  do {
    metros = parseInt(
      prompt("Introduce cantidad de metros para pasar a kilometros!")
    ); //Pedimos al usuario metros y lo convertimos a enteros
  } while (metros <= 0 || isNaN(metros)); //mientras sea menor o igual a 0 y sea un valor no numerico sigue pidiendolo

  let kilometros = metros / 1000; //Hacemos la conversion

  console.log(`${metros} metros equivalen a ${kilometros} kilometros`); //Mostramos por consola el resultado
}

function ej2() {
  let numero;
  let cont1 = 0;
  let cont2 = 0; //Inicializamos contadores de cada uno a 0
  let cont3 = 0;
  let cont4 = 0;

  for (let i = 1; i <= 10; i++) {
    //Bucle for para repetir el procedimiento por cada num (10)
    do {
      numero = parseInt(prompt(`Introduce numero entero (${i})`)); //Pedimos al usuario numero entero
    } while (isNaN(numero)); //Mientras sea no numerico da vueltas

    if (numero < 10) {
      //Menores 10
      cont1++;
    } else if (numero >= 10 && numero <= 20) {
      //Entre 10 y 20 (ambos incluidos)
      cont2++;
    } else if (numero >= 21 && numero <= 30) {
      //Entre 10 y 30 (ambos incluidos)
      cont3++;
    } else {
      //Resto por que lo que queda ya es mayor que 30
      cont4++;
    }
  }
  alert(
    `Menores de 10: ${cont1}. Entre 10 y 20: ${cont2}. Entre 21 y 30: ${cont3}. Mayores de 30: ${cont4}.` //Mostramos el alert con cada contador
  );
}

function ej3() {
  let numeros = []; //Definimos el arrays vacio
  let eleccion;

  for (let i = 0; i < 7; i++) {
    //Bucle for para pedir numeros 7 veces
    do {
      eleccion = parseInt(
        prompt(
          `Introduce numeros enteros positivos para la pos (${i}) del array`
        )
      );
      if (eleccion >= 1 && !isNaN(eleccion)) {
        //Si es mayor o igual que 1 y es numerico lo mete en el array con push
        numeros.push(eleccion);
      }
    } while (eleccion < 1 || isNaN(eleccion)); //Mientras sea menor que 1 y sea no numerico sigue pidiendo el numero
  }

  // Apartado A

  console.log(numeros); //Mostramos el array completo

  function sumarTotal(acumulador, num) {
    //Funcion para sumar
    return acumulador + num; //Devuelve la suma total de todo los elementos del array
  }

  let sumaTotal = numeros.reduce(sumarTotal, 0); //Hacemos reduce de numeros para asi sumar todos los valores del array anterior y guardarlo en otro

  console.log(sumaTotal); //Mostramos el resultado

  //Apartado B

  for (let i = 0; i < 2; i++) {
    //Bucle for para pedir numeros 2 veces
    do {
      eleccion = parseInt(
        prompt(
          `Introduce numeros enteros positivos para la pos primera y ultima del array`
        )
      );
      if (eleccion >= 1 && !isNaN(eleccion)) {
        if (i == 0) {
          //Si i es 0 va a poner el primer numero en la pos 0
          numeros.splice(0, 1, eleccion);
        } else {
          numeros.splice(numeros.length - 1, 1, eleccion); //Si no la pone en la ultima pos
        }
      }
    } while (eleccion < 1 || isNaN(eleccion)); //Mientras sea menor que 1 y sea no numerico sigue pidiendo el numero
  }

  //Apartado C

  let total = 0;
  let media;

  function mediaNum(numero) {
    //Funcion para calcular la media
    total += numero;
    media = total / numeros.length;
  }

  numeros.forEach(mediaNum); //forEach para recorrer todos los numeros del array

  console.log(media.toFixed(2)); //Mostramos y redondeamos a 2 decimales

  //Apartado D

  function mayorMedia(numero) {
    //Creamos esta funcion para ver cuales son mayores a la media
    return numero > media;
  }

  function menorMedia(numero) {
    //Creamos esta funcion para ver cuales son menores a la media
    return numero < media;
  }

  let mayores = numeros.filter(mayorMedia); //Filtramos ambos casos con su respectiva funcion
  let menores = numeros.filter(menorMedia);

  console.log(`Numeros Mayores Media: ${mayores.join(", ")}`); //Mostramos la cadena con un join para separar los elementos por coma
  console.log(`Numeros Menores Media: ${menores.join(", ")}`);

  // Apartado E

  do {
    eleccion = parseInt(
      prompt("Introduce numero para ver si se encuentra en el array")
    );
  } while (eleccion < 1 || isNaN(eleccion));

  function buscarNum(numero) {
    return eleccion == numero;
  }

  let presente = numeros.some(buscarNum);

  let posiciones = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === eleccion) {
      posiciones.push(i);
    }
  }

  if (presente) {
    console.log(
      `El numero ${eleccion} aparece en las posiciones: ${posiciones.join(
        ", "
      )}`
    );
  } else {
    console.log(`El numero ${eleccion} no se encuentra`);
  }
}

function ej4() {
  let num;

  do {
    num = parseInt(
      //Creamos un do while para controlar que el num sea entre 2 y 5 y es un numero
      prompt("Introduce numero entero de entre 2 y 5 para tamaño de la matriz")
    );
  } while (num < 2 || num > 5 || isNaN(num));

  //Apartado A

  let matriz = [];

  for (let i = 0; i < num; i++) {
    //Hacemos bucle for para rellenar la matriz
    matriz[i] = [];
    for (let j = 0; j < num; j++) {
      //Recorremos las columnas y las filas
      matriz[i][j] = parseInt(Math.random() * (100 - 1) + 1); //Generar numero aleatorios del 1 al 99
    }
  }

  //Apartado B

  function matrizBonita(matrizn) {
    for (let i = 0; i < matrizn.length; i++) {
      let fila = ""; //Ponemos una cadena vacia para cada fila
      for (let j = 0; j < matrizn[i].length; j++) {
        if (matrizn[i][j] < 10) {
          fila += "0" + matrizn[i][j] + " ";
        } else {
          fila += matrizn[i][j] + " "; //Concatenamos el valor del array con filas y un espacio detras para darle formato
        }
      }
      console.log(fila);
    }
  }

  matrizBonita(matriz);

  //Apartado C

  let sumatorio = 0;

  for (let i = 0; i < matriz.length; i++) {
    //For para recorrer todos los elementos del array
    for (let j = 0; j < matriz[i].length; j++) {
      sumatorio += parseInt(matriz[i][j]); //Sumamos el valor de cada pos de la matriz
    }
  }

  console.log(`La suma de todos los valores de la matriz es: ${sumatorio}`); //Mostramos por consola

  //Apartado D

  let matrizCopia = matriz.map(fila => [...fila]); //Copiamos matriz en matrizCopia

  for (let i = 0; i < matrizCopia.length; i++) {
    //Recorremos la matriz
    for (let j = 0; j < matrizCopia[i].length; j++) {
      if (matrizCopia[i][j] <= 50) {
        //Si es menor o igual a 50
        matrizCopia[i][j] = 50; //Va a reemplazarlo por 50
      }
    }
  }

  matrizBonita(matrizCopia);

  //Apartado E

  let sumatorio1 = 0;
  let sumatorio2 = 0;

  for (let i = 0; i < matriz.length; i++) {
    //matriz
    for (let j = 0; j < matriz[i].length; j++) {
      if (i == j) {
        sumatorio1 += parseInt(matriz[i][j]); //Sumamos el valor de cada pos de la matriz
      }
    }
  }

  for (let i = 0; i < matrizCopia.length; i++) {
    //matrizCopia
    for (let j = 0; j < matrizCopia[i].length; j++) {
      if (i == j) {
        sumatorio2 += parseInt(matrizCopia[i][j]); //Sumamos el valor de cada pos de la matriz
      }
    }
  }

  console.log(`La suma de la diagonal de la matriz es = ${sumatorio1}`);
  console.log(`La suma de la diagonal de la matriz es = ${sumatorio2}`); //Mostramos por pantalla ambos resultados

  if (sumatorio1 > sumatorio2) {
    console.log("La suma diagonal de matriz es mayor que matrizCopia"); //Comparamos para ver cual de las dos sumas es mayor
  } else if (sumatorio1 < sumatorio2) {
    console.log("La suma diagonal de matrizCopia es mayor que matriz");
  } else {
    console.log("La suma de las diagonales de ambas matrices son iguales!");
  }
}

