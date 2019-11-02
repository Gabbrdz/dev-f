// Hacer una funcion que hagala peticion por autor y devolver la lista de sus libros
// http://openlibrary.org/search/.json?author=

const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    const URL_FINAL = URL_BASE + URI;

    var jsonUpdate = {
        'name': name,
        'last_name': last_name,
        'nacionalidad': nacionalidad,
        'biography': biography,
        'gender': gender,
        'age': age,
    }

    return new Promise((resolve, reject) => {
        request.put({url: URL_FINAL, form: jsonUpdate}, (error, response, data) => {
            response.statusCode = 200
            ? resolve(JSON.parse(data))
            : reject(`ERROR! en Update. El usuario con id ${id} no fue actualizado`)
        })
    })
}

updateAuthor(29, 'Gabriela', 'Rodriguez', 'Mexicana', 'Disenadora grafica', 'M', 29)
.then(autor => console.log(autor))
.catch(error => console.log(error))
