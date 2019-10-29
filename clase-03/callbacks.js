
// Ejecucion con un callback
console.log(1);
setTimeout(() =>{
  console.log(2);
}, 3000);
console.log(4);


// ////////////////////////////
// Ejecucion con ciclo for
console.log(1);

setTimeout(() => {
  console.log(5);
  for (let i=0; i<=999; i++);
}, 3000);
console.log(4);


// ////////////////////////////
// Higher Order functions
let callback = () => {
  console.log('Este es un mensaje dentro de mi callback')
};

function mostrarMensaje(callback) {
  callback();
};

mostrarMensaje(callback);


// ////////////////////////////
// Crear una funcion de orden superior que reciba como argumento un mensaje y un callback que este se pase como argumento. La funcion debe mostrar el mensaje en un console.log o console.warn

let ordenSuperior = (mensaje, callback) => {
    callback(mensaje);
}

let imprimirEnWarn = (mensaje) =>{
    console.warn(mensaje)
}

let imprimirEnLog  = (mensaje) =>{
    console.log(mensaje)
}

ordenSuperior('Este Mensaje va en un console.log', imprimirEnLog);
ordenSuperior('Este Mensaje va en un console.warn', imprimirEnWarn);

// Crear una funcion de orden superior que reciba como argumentos dos numeros y un callback. Segun el callback que se pase a ala funcion se evolvera la suma de los dos numeros, la resta de los dos numeros o la multiplicacion de dos numeros.


function hacerOperacion(num1, num2, operacion) {
    return operacion(num1, num2);
};

function sumar(num1, num2) {
    return num1 + num2
};

function restar(num1, num2) {
    return num1 - num2
};

function multiplicar(num1, num2) {
    return num1 * num2
};

console.log(hacerOperacion(5, 5, sumar));
console.log(hacerOperacion(5, 3, restar));
console.log(hacerOperacion(5, 7, multiplicar));