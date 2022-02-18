// Le pedimos un usuario
fetch('https://jsonplaceholder.typicode.com/todos/1')
//Promesas
.then(response => response.json()) // Pasamos el response a un objeto JSON para que sea manipulable
.then(json => console.log(json)) // imprimimos lo recibido
.catch(e => console.log(e)) // Por si sucede un error