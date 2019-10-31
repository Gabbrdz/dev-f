// Traer los primeros 151 pokemon de la primera generacion y devolver un objeto con el nombre, sus moves, tipos tamaño y peso
// 

const requestPokemon = require('request');

const pokemonApi = 'https://pokeapi.co/api/v2/pokemon';

requestPokemon.get( pokemonApi, (error, response, allPokemon) => {
    const respuesta = JSON.parse(allPokemon).results;
    for (let i = 0; i <= 10; i++) {
        requestPokemon.get(respuesta[i].url, (error, response, eachPokemon) => {
            const respuesta = JSON.parse(eachPokemon);
                let estePokemon = {

                nombre: respuesta.name, 
                moviemientos: respuesta.moves,
                typos: respuesta.types, 
                tamaño: respuesta.height, 
                peso: respuesta.weight
            }
            console.log(estePokemon)
        })
    }
})