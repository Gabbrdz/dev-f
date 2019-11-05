// A partir del arreglo dado genera un nuevo arreglo en el que solo se encuentren los conejos del arreglo original

const animalitos = [
    { nombre: 'pongo', especie: 'osito' },
    { nombre: 'snoopy', especie: 'perrito' },
    { nombre: 'leia', especie: 'ponejito' },
    { nombre: 'tonathiu', especie: 'ponejito' },
    { nombre: 'bunny', especie: 'ponejito' },
    { nombre: 'garfield', especie: 'gatito '}
]

const filterByID = animalitos.filter(especie => especie.especie === 'ponejito');

console.log(filterByID);
