// a partir del siguiente arreglo, generar un nuevo arreglo que contenga los poderes de los superheroes

const superheroes = [
    { nombre: 'batman', editorial: 'DC', poderes: ['ninguno', 'dinero']},
    { nombre: 'spiderman', editorial: 'Marvel', poderes: ['sentido aracnido', 'trepar', 'perder a su tio']},
    { nombre: 'superman', editorial: 'DC', poderes: ['ninguno', 'fuerza']},
    { nombre: 'hulp', editorial: 'Marvel', poderes: ['fuerza', 'verde']},
    { nombre: 'gatubela', editorial: 'DC', poderes: ['ninguno', 'inteligencia']}
]

const filterBySuperpoder = superheroes.map(poderes => poderes.poderes[2]);
console.log(filterBySuperpoder);
