// Crear objeto Duck
let duck = {
    name: "Aflac",
    numLegs: 2,
    // Definir metodos
    sayName: function() {return "The name of this duck is " + this.name + ".";} // Referenciamos propiedades con this
};

// Acceder al elemento name de duck
console.log(duck.name)