const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// configuracion para poder recibir el body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// http://localhost:3000/
app.get('/', (request, response) => {
    response.send({ message: "Tu primera peticion" });
})

// http://localhost:3000/home
app.get('/home', (request, response) => {
    response.send({message: 'Este es un mensaje desde el home'});
})

// PARAMS
// http://localhost:3000/20
app.get('/user/:uid', (request, response) => {
    console.log(request.params);
    const uid = request.params.uid

    response.send({ message: `Id de usuario: ${uid}`})
})


// QUERIES
// http://localhost:3000/search?q=gato&color=negro&vidas=9
app.get('/search', (request, response) => {
    console.log(request.query);
    const { q, color, vidas} = request.query
    response.send({q, color, vidas})
})

// http://localhost:3000/create/user
app.post('/create/user', (req, res) =>{
    console.log(req.body);
    const { name, last_name, age, is_active } = req.body

    res.status(201).send({
        id : '19',
        name,
        last_name,
        age,
        is_active
    })
})

// http://localhost:3000/edit/user
app.patch('/edit/user', (req, res) =>{
    console.log(req.body);
    const { name, last_name, age, is_active } = req.body

    res.send({
        id : '20',
        name,
        last_name,
        age,
        is_active
    })
})


// http://localhost:3000/edit/user
app.put('/edit/user', (req, res) =>{
    console.log(req.body);
    const { name, last_name, age, is_active } = req.body

    res.send({
        id : '20',
        name,
        last_name,
        age,
        is_active
    })
})

// http://localhost:3000/delete/user
app.delete('/user/:id', (req, res) => {
    console.log(req.params);
    const uid = req.params.id

    res.send({ message: `Id de usuario fue eliminado: ${id}`})
})



app.listen(3000, ()=> {
    console.log('The server is listening on port 3000')
})
