// Mandamos llamar express
const express = require('express');

// Le asignamos express a variable server
const server = express();

// Configuracion de Dev Enviroment usando dotenv
const { config } = require('./configuration/index');
const moviesApi = require('./routes/movies-routes');


//Configuracion de puerto llamando config desde carpeta config
server.listen(config.port, function(){
    console.log(`El puerto esta escuchando en port: ${config.port}`)
});

moviesApi(server);

// npm run dev
// npm run start