const request = require('request');

function getNameById(id) {

    var swapiURL = `https://swapi.co/api/people/${id}`;

    request.get(swapiURL, (err, response, body) => {
        console.log(`status code ----> ${response.statusCode}`);

        const respuestaBody = JSON.parse(body);
        if (response.statusCode === 200) {
            console.log('la peticion es correcta');
            console.log(respuestaBody.name);
        } else {
            console.log('la peticion es incorrecta');
            console.log(respuestaBody.detail);
        }
    });
}

getNameById(2)



