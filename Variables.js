// Objeto  
let variableObjeto = {
    nombre: "Denisse",
    edad: 22
}
variableObjeto.id = 1; // Puedo agregarle propiedades

// Colecciones 
const coleccion = [1,2,3,4,5];

// La variable var puede ser sobreescrita sin errores. 
var camper = 'James'; // var es declarada globalmente
var camper = 'David'; // Camper sera "David"

// Se recomienda usar let para evitar la situacion de reemplazo de variables
let camper = 'James'; // Se puede declarar globalmente o dentro de un scope
let camper = 'David'; // Error, no se puede declarar 2 veces dentro de un mismo scope

// Constante, variable de solo lectura
const FAV_PET = "Cats";

// Las variables const siguen siendo mutables, solo previenen la reasingacion del identificador 
// de una variable

const s = [5, 6, 7];
s = [1, 2, 3]; // Error
s[2] = 45; // Podemos modificar el array dentro del const
console.log(s); // [5,6,45]

// Si tampoco quiero que mi variable mute, puedo usar freeze
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj); // lo congelo
  // Si quiero modificarlo, no se mostrará ningun error, pero tampoco se va a hacer
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); // { name: "FreeCodeCamp", review: "Awesome" }