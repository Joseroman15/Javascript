function alertaBoton() {
  alert("Hola");
}

function alertFoto() {
  alert("Adios");
}

//declarar variables

var miNombre = "Jose"; //var es la forma original de declarar una variable, si la creas dentro de una funcion la puedes usar en mas sitios
var miEdad = 20;

console.log("Me llamo " + miNombre + " y tengo " + miEdad + " años!");

function testVar() {
  var x = 2;
  if (true) {
    x = 10; //Si es con var se ignoran los bloques
    var y = 4;
  }
  console.log(x);
  console.log(y);
  console.log(miEdad);
}
testVar();

/**
function testLet () {
    if(true){
        let z = 20; //Respeta los bloques al hacerlo con let
    }
    console.log (z);
}
testLet();
*/

//constantes

const PI = 3.14;
//PI = 3.20; //si lo intento cambiar me avisa la consola del error
console.log(PI);

let z = 4 / "casa";
console.log(z); //Da Nan Sirve para validaciones y usarlo en bucle para que se introuzcan bien los datos

if (isNaN(z)) {
  console.log("Te has equivocado");
}

//nueva forma de escribir cadenas

let texto = `Hola soy ${miNombre} y tengo ${miEdad} años`;
console.log(texto);

let a = "3";
console.log("el numero es: " + Number(a)); //Pasar de string a numero

let b = 6;
console.log("El numero es: " + String(b)); //Pasar de numero a string
