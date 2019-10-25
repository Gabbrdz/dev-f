// Objetos literales

const ayudanteSanta = {
    color: 'cafe',
    ladrar: function(ladrido){
        console.log('wau')
    },
    raza: 'Galgo',
    comer: function() {
        console.log('chomp chomp')
    }
}

// console.log(ayudanteSanta);
//console.log(ayudanteSanta.ladrar('ladrido'));

////////////////////////


// Objeto "Celular"

const celular = {
  color: 'azul',
  marca: 'Samsung',
  apps: [
    'facebook',
    'twitter',
    'netflix'
  ],
  mandarMensaje : function(mensaje) {
    console.log(mensaje)
  },
    mandarMensaje : function() {
    console.log('Ring Ring')
  }
}

// console.log(celular.apps);