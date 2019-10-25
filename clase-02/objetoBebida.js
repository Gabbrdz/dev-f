// Crear una clase bebida que hereda a dos clases 'Cerveza' y 'Refresco'. Ambas clases deben tener la propiedad cantidad(ml). La clase refresco debe de tener el atributo azucar(g) y la clase cerveza debe de tener el atributo porcentajeAlcohol. Crear las funciones getter y setters correspondientes.

// Objeto Tipo Clase Padre
class Bebida {
    constructor(cantidad){
      this.cantidad = cantidad;
    }

  getCantidad() {
      return this.cantidad;
  }

  setCantidad(cantidad) {
      this.cantidad = cantidad;
  }

};

// Objeto Tipo Clase Hijo (1)
class Refresco extends Bebida {
  constructor(cantidad, azucar) {
    super(cantidad);
    this.azucar = azucar;
  }

  getAzucar() {
      return this.Azucar;
  }

  setAzucar(Azucar) {
      this.Azucar = Azucar;
  }
};


// Objeto Tipo Clase Hijo (2)
class Cerveza extends Bebida {
  constructor(cantidad, porcentajeAlcohol) {
    super(cantidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }

  getPorcentajeAlcohol() {
      return this.porcentajeAlcohol;
  }

  setPorcentajeAlcohol(porcentajeAlcohol) {
      this.porcentajeAlcohol = porcentajeAlcohol;
  }
};


const Indio = new Cerveza(355, 4.5);
console.log(Indio.getCantidad());
console.log(Indio.cantidad);

console.log(Indio.getPorcentajeAlcohol());
console.log(Indio.porcentajeAlcohol);

