// Construir un objeto tipo clase Maestro, con subcases de Maestro de Fisica y Musica,y a cada uno asignarle su materia y calcular su promedio de grupo a partir de calificaciones (puedes usar arreglos. El maestro de física, tiene un atributo “antiguedad” que guarda un valor numerico, mientras que el maestro de musica tiene un atributo “edad” tambien guardado como valor númerico.

// Objeto Tipo Clase Padre
class Maestro {
    constructor(materia, calificaciones){

      this.materia = materia;
      this.calificaciones = calificaciones;
    }

  getPromedio() {
    let sumaTotal = 0;

    for(let i=0; i<this.calificaciones.length; i++) {
      // sumaTotal = sumaTotal + this.calificaciones[i]
      sumaTotal += this.calificaciones[i]
    }
      return (sumaTotal/this.calificaciones.length);
  }
}

// Objeto Tipo Clase Hijo (1)
class Musica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
;}

// Objeto Tipo Clase Hijo (2)
class Fisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

const Profe1 = new Fisica('Fisica', [7,8,8,10,6], 10);
  console.log(Profe1);
  console.log(Profe1.getPromedio());


const Profe2 = new Musica('Musica', [9, 10, 10, 8, 8], 42);
  console.log(Profe2);
  console.log(Profe2.getPromedio());
