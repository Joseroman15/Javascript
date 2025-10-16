/** 
 * Programa sencillo que verifica la edad del usuario para acceder a un casino.
 * Si tiene 18 años o más, se le da un saldo inicial de 100 monedas.
 * Si es menor de 18, se le niega el acceso.
*/

let edad = Number(prompt("Introduzca su edad:"));
let saldo = 0;

if (edad >= 18) {
    console.log("Bienvenido! Tienes un saldo de 100 monedas!");
    saldo += 100;
    console.log(`Monedas: ${saldo}`);
} else {
    console.log("Lo sentimos, necesitas tener 18 años para acceder.");
}
