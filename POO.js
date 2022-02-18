// Crear objeto Duck
let duck = {
    name: "Aflac",
    numLegs: 2,
    // Definir metodos
    sayName: function() {return "The name of this duck is " + this.name + ".";} // Referenciamos propiedades con this
};

// Acceder al elemento name de duck
console.log(duck.name)

// En ECMAScript 6, el objeto se crea con solo referenciarlo 
console.log(duck);

// NO HACER ESTA ASIGNACION, es la COPIA de la referencia, no otra instancia de la clase
const duck2 = duck; 

// Crear un clon del objeto con la propagacion, ahi si se creara otra "instancia"
const duck3 = {...duck};

/*
Con la creacion de otra instancia me refiero a, si quiero modificar una propiedad de duck2 = duck,
lo estaré cambiando tanto en duck2 como en duck. En cambio, en el segundo caso, serán instancias 
separadas e independientes
*/