const express = require('express');
const app = express();

const { config }  = require('./configuration/index');
const moviesApi = require('./routes/movies-routes');

moviesApi(app)

app.listen(config.port, function(){
    console.log(`Server listenning on port: ${config.port}`)
})