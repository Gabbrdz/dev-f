const listaAnimales = [
    {
        id: 1,
        name: 'Perro'
    },
    {
        id: 2,
        name: 'Gato'
    },
    {
        id: 3,
        name: 'Cabra'
    },
    {
        id: 4,
        name: 'Hamster'
    }
];


const listaFiltrada =  [];
for (let i=0; i <listaAnimales.length; i++) {
    if (listaAnimales[i].id > 3) {
        listaFiltrada.push(listaFiltrada[i])
    }
}

console.log(listaFiltrada);

