const BR = "<br>";

/** Ejercicio 1: A través de un prompt, pide el nombre al usuario y salúdalo con un alert de la
siguiente forma: “Bienvenid@ a mi página XXXXXX” (siendo XXXXXX el nombre que ha
introducido el usuario). 
*/
function saludarUsuario() {
  let nombre = prompt("Introduce tu nombre:");

  if (nombre) {
    alert(`Bienvenido a mi pagina ${nombre}!`);
  } else {
    alert(`Bienvenido a mi pagina anonimo!`);
  }
}

/**
Ejercicio 2: Pedir dos valores numéricos con prompt y mostrar su suma, resta, multiplicación,
división y resto
 */
function operacionesMatematicas() {
  let num1 = prompt("Introduce un numero entero:");
  let num2 = prompt("Introduce otro numero entero:");

  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 && num2) {
    document.writeln(`La suma de ${num1} + ${num2} es: ` + (num1 + num2) + BR);

    if (num1 >= num2) {
      document.writeln(`La resta de ${num1} - ${num2} es: ` + (num1 - num2) + BR);
    } else {
      document.writeln(`La resta de ${num2} - ${num1} es: ` + (num2 - num1) + BR);
    }

    document.writeln(`La multiplicacion de ${num1} X ${num2} es: ` + (num1 * num2) + BR);

    if (num1 >= num2) {
      document.writeln(`La division de ${num1} / ${num2} es: ` + (num1 / num2) + BR);
    } else {
      document.writeln(`La division de ${num2} / ${num1} es: ` + (num2 / num1) + BR);
    }

  } else {
    alert("No se han introducido valores correctamente!");
  }
}


/**Ejercicio 3: Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos
de alojamiento, alimentación y entretenimiento. */
function calcularCostoViaje() {
  let alojamiento = prompt("Introduce el coste del alojamiento:");
  let alimentacion = prompt("Introduce el coste del alimentacion:");
  let entretenimiento = prompt("Introduce el coste del entretenimiento:");

  alojamiento = Number(alojamiento);
  alimentacion = Number(alimentacion);
  entretenimiento = Number(entretenimiento);

  if (alojamiento && alimentacion && entretenimiento) {
    let total = alojamiento + alimentacion + entretenimiento;
    document.writeln(`El coste total del viaje es de ${total}€`);
  } else {
    alert("No se han introducido los valores correctamente!");
  }
}

/**Ejercicio 4: Crea un programa que calcule el precio final de un producto después de
aplicarle un descuento.
 */
function calcularPrecioConDescuento() {
  let precio = prompt("Introduce el precio del producto:");
  let desc = prompt("Introduce el descuento:");

  precio = Number(precio);
  desc = Number(desc);

  if (precio && desc) {
    let rebaja = precio * (desc / 100); //Para saber lo que se le rebaja
    let total = precio - rebaja;
    document.writeln(`El precio con el descuento es: ${total.toFixed(2)}€`) //toFixed para sacar dos decimales
  } else {
    alert("No se han in troducido los valores correctamente!");
  }
}
