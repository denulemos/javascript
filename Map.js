const datos = [
    {nombre: "Denisse", edad: 22},
    {nombre: "Denisses", edad: 30},
    {nombre: "Denissea", edad: 29},
    {nombre: "Denisseq", edad: 24},
    {nombre: "Denissew", edad: 27},
    {nombre: "Denissed", edad: 12},
]

// Recorrer con Foreach
datos.forEach(elemento => {
    console.log(elemento);
});

// Map es mas rapido, hace lo mismo que foreach pero con menos procesamiento
datos.map( elemento => {
    console.log(elemento.nombre);
})