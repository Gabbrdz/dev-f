const request = require('request');

function getinfoID(id) {
    return new Promise((resolve, reject) => {
        const swapiURL = `https://swapi.co/api/people/${id}`
        request.get( swapiURL, (error, response, data) => {
            const json = JSON.parse(data);
            if (response.statusCode === 200) {
                resolve(json);
            } else {
                reject(`Error ${statusCode}`)
            }
        });
    });
}


function getMoviebyURL(url) {
    return new Promise((resolve,reject) => {
        request.get( url, (error, response, data) => {
            const json = JSON.parse(data)
            response.statusCode === 200
            ? resolve(json)
            : reject(`Error ${statusCode}`)
        });
    });
}

// getinfoID(1)
//     .then(id => console.log(id))
//     .catch(error => console.log(error))

getinfoID(1)
    .then(id => console.log(id.name))
    .catch(error => console.log(`error: ${error}`))
    

getinfoID(1)
    .then(response => getMoviebyURL(response.films[0]))
    .then(response2 => console.log(`aparece por primera vez en ${response2.title} osea el episodio #${response2.episode_id}`))
    .catch(error => console.log(`error: ${error}`))

    