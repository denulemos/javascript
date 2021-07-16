// Podemos definir clases en JS

class SpaceShuttle {
    // Constructor
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  

  // Creamos el objeto pasando por parametros los atributos para el constructor
  const zeus = new SpaceShuttle('Jupiter');


// ----------- GETTERS Y SETTERS ---------------

// Definimos clase Book
class Book {
    constructor(author) {
      this._author = author;
    }

    // getter
    get writer() {
      return this._author;
    }

    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }

  // Instanciamos Book
  const novel = new Book('anonymous');
  // Setter
  novel.writer = 'newAuthor';
  // Getter
  console.log(novel.writer);