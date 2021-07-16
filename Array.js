// Creamos un array simple
let simpleArray = ['one', 2, 'three', true, false, undefined, null];

// Accedemos a sus elementos
let variable = simpleArray[0] //'one'

// Agregamos un elemento al principio
simpleArray.unshift('Hola');

// Agregamos un elemento al final del Array
simpleArray.push('Elemento final');

// Eliminamos un elemento final del array
simpleArray.pop();

// Eliminamos un elemento al principio del array
simpleArray.shift();

// Creamos un nuevo array
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
// Con splice mandamos por parametro desde donde queremos eliminar, cuantos elementos, y los dos ultimos parametros son parametros a agregar
numbers.splice(startIndex, amountToDelete, 13, 14); // [ 10, 11, 12, 13, 14, 15 ]

// Copiamos elementos de un array a otro con slice
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// Tomamos el elemento 1 y 3
let todaysWeather = weatherConditions.slice(1, 3); // ['snow', 'sleet']

// Tambien podemos usar el indicador de propagacion para tomar todo el array
let weatherCopy = [...weatherConditions]; // ['rain', 'snow', 'sleet', 'hail', 'clear']

// Podemos combinar el indicador de propagacion con una estructura normal
let weatherCopyCambiado = ['hola', ...weatherConditions , 'chau']; // ['hola', 'rain', 'snow', 'sleet', 'hail', 'clear', 'chau']