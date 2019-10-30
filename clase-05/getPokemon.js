const requestPokemon = require('request');

const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/1';

requestPokemon.get( pokemonApi, (error, response, body) => {
    response.statusCode === 200
    ? console.log(`Types: ` + JSON.parse(body)
    .types
    .map(type => type.type.name)
    )
    : console.log(error)
});
