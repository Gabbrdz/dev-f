// Variables 
const string = "Hola Mundo"; // const --> no va a cambiar de valor [const[][][]]
let entero = 63; // let --> solo se puede usar en el scope creado [let]
var flotante = 7485.38; // var --> Se puede usar de manera global var[][var[var][]]
const booleano = false; // False[0] o True[1]

console.log(string);
console.log(entero);
console.log(flotante);
console.log(booleano);

console.log("tipo de la variable: " + typeof(string));

//Operadores 
console.log("Operador: '='", 2==2); // == : true-ish / === Estrictamente igual
console.log("Operador: '!='", 2!=2); // != Verifica que el valor sea diferente  / === Estrictamente diferente
console.log("Operador: '>'", 5>1); // Mayor que
console.log("Operador: '>='", 5>=4); // Mayor o igual que
console.log("Operador: '<'", 3>7); // Menor que
console.log("Operador: '<='", 9>=9); // Menor o igual que

// Esctructuras de Control

//For

for(let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Else
var edad = 18;

if ( edad >= 18) {
  console.log('eres mayor de edad');
} else {
  console.log('No es mayor de edad')
}

// Else if
let fruta = 'piña';

if (fruta == 'fresa') {
  console.log('tu fruta es una fresa')
 } else if(fruta == 'pera') {
    console.log('tu fruta es una pera')
} else if(fruta == 'mango') {
    console.log('tu fruta es una mango')
} else {
  console.log('tu fruta es una',  fruta)
    console.log(`tu fruta es una,  ${fruta}`) // Template literals

}

// Switch
let signo = prompt('Ingresa tu signo');

switch(signo){

  case "Aries":
    console.log('Te llegara dinero');
  break;
  
  case "Tauro":
    console.log('Conseguiras trabajo Mañana');
  break;

  case "Virgo":
    console.log('Conoceras a alguien pronto');
  break;

  case "Sagitario":
    console.log('Los Astros no infuyen en tu dia a dia');
  break;

  default:
  console.log("Ingresa un signo valido")

}


//Array

const lista = [];
let lista2 = [1, 3, 'uno', '2', true, false, 'tres'];
console.log(lista);
console.log(lista2);
console.log(lista2[6]);

lista.push('hola');
lista.push(9);
lista.push(true);

console.log(lista);


for (let i=0; i<lista.length; i++){
  console.log(list2[i])
};


var nombre = 'Gabriela';
var apellido = 'Rodiguez';

function printName(name){

  console.log(`tu te llamas: '${name}`)
}

printName(nombre + apellido);


const print = (apellido) => {

  console.log(`tu apellido es: '${apellido}`);
}

print('Rodriguez')