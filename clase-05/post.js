
const request = require('request');

const URL_BASE = 'https://goodread-devf-aaron.herokuapp.com/api/v1';

function createAuthor(nombre, apellido, biografia, genero, edad) {
    const URI ='authors/';
    const URL = URL_BASE + URI;

    const postJSON = {
        name: nombre,
        last_name: apellido,
        biography: biografia,
        gender: genero,
        age: edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL, form: postJSON }, (err, response, data) => {
            if (response.statusCode === 201) {
                const json  = JSON.parse(data);
                resolve(json)
            } else {
                reject(response.statusCode);
                console.log('la api no funciona');
            }
        });
    });
}

createAuthor('Gaby', 'Rodriguez', 'Diseñadora Grafica', 'W', 29)
    .then(author => console.log(author.id))
    .catch(err => console.log(err));