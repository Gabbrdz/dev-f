// Hacer una funcion que hagala peticion por autor y devolver la lista de sus libros
// http://openlibrary.org/search/.json?author=

const request = require('request');

const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function autorExiste(autor) {
    const URI = `authors/${id}`
    const URL_FINAL = URL + URI;

    return new Promise((resolve,reject) => {
        request.get( URL_FINAL, (error, response, data) => {
            response.statusCode === 200
            ? resolve(json)
            : reject(`Error ${statusCode}`)
        });
    });
}

autorExiste(1)
    .then(id => console.log(statusCode))
    .catch(error => console.log(`error: ${error}`))
    