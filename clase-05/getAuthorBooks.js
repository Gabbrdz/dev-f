// Hacer una funcion que hagala peticion por autor y devolver la lista de sus libros
// http://openlibrary.org/search/.json?author=

const request = require('request');

const peticionAutor = (autor) => {
    let URL = 'http://openlibrary.org/search.json?author=' + autor;

    request.get(URL, (error, response, data) => {
        response.statusCode = 200 
            // If 
            ?console.log(JSON.parse(data).docs.map(doc => doc.title_suggest))
            //  Else
            : console.log(error);
    })
}

peticionAutor('jenny');