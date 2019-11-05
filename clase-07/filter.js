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


const filterByID = listaAnimales.filter(animal => animal.id > 3);
// const filterByID2 = listaAnimales.filter( 
//     function(animal) {
//     return animal.id  > 3
   
// });

console.log(filterByID);
// console.log(filterByID2);
