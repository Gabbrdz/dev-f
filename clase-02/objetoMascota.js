
//////////////////////

// Objeto Tipo Clase Padre
class Mascota {
    constructor(nombre, patas){

      this.nombre = nombre;
      this.patas = patas;
      console.log('Se adopto la Mascota');
    }

  getName() {
    return this.nombre;
  }

}

// Objeto Tipo Clase Hijo (1)
class Gato extends Mascota {
  constructor(vidas) {
    super(garfield,4);
    console.log('se adopto al Gato');
    this.vidas = vidas
  }
  getLifes(){
  return this.vidas
  }
;}

// Objeto Tipo Clase Hijo (2)
class Perro extends Mascota {
  constructor(raza, color, nombre) {
    super(nombre, 4); // Palabra clase usada para acceder y llamar funciones del padre de un objeto
    console.log('Se adopto al Perro');
    this.raza = raza;  // Hace referencia al contructir de la propia clase
    this.color = color;
  }

  getRaza(){
      return this.raza
  }
}

const snoopy = new Perro('Beagle', 'blanco y negro', 'Snoopy' )
  console.log(snoopy)

  
const garfield = new Gato(7)
  console.log(garfield)