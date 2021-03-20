const obtenerUsuario = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Espero a que fetch me de una respuesta
        console.log(respuesta);
    } catch (e) {
        console.log(e);
    }
}

obtenerUsuario()