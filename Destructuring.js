const Persona = {
    nombre: "Denisse",
    edad: 22,
    casada: false
}

const {nombre, edad} = Persona; // Es lo mismo que var nombre = Persona.nombre 

const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

const { johnDoe: { age, email }} = user;

// Analizar array con destructuring

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //89

// Asignar variables desde arreglos

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1,2,5

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1,2 
console.log(arr); // [3, 4, 5, 7]