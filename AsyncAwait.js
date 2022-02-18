const obtenerUsuario = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Espero a que fetch me de una respuesta
        console.log(respuesta);
    } catch (e) {
        console.log(e);
    }
}

obtenerUsuario()

/* Con cada promise, vamos creando diferentes hilos en la ejecucion, 
que se van parando/continuando a medida que se van cumpliendo (o no, porque puede fallar) 
las promesas.

Una funcion puede ser `async()` si posee un `await` dentro del mismo 
*/