// Declaracion común
function NombreFuncion (parametro1, parametro2){
    console.log("Hola");
}

// Arrow Function
const Saludo = (parametro1, parametro2) => console.log("Hola"); // Si es una sola linea podemos obviar las llaves

// Funcion con parametro REST, puede recibir X cantidad de parametros
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));