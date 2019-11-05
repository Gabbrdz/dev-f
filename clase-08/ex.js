// Agrega un endpoint 'api/suma' que responda una peticion de tipo GET con la suma de dos numeros que recibe mediante las queries num1 y num2. El Servidos debe responder con un codigo de estado 200, y un jaon como el siguiente: {"resultado" : 7}

const express = require('express');
const bodyParser = require('body-parser');

const suma = express();

// configuracion para poder recibir el body
suma.use(bodyParser.urlencoded({extended:true}))
suma.use(bodyParser.json());

// QUERIES
// http://localhost:3000/api/suma?num1=4&num2=3
suma.get('/api/suma', (request, response) => {
    const { num1, num2 } = request.query
  
    const resultadoSuma = parseInt(num1) + parseInt(num2);

    response.send({"resultado": resultadoSuma})

})

suma.listen(3000, ()=> {
    console.log('The server is listening on port 3000')
})