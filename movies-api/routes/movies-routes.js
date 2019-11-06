const express = require('express');

const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(server) {
    
    server.use('/api/movies', router);

    router.get('/', async (req, res, next) => {
        try {
            const allMovies = await Promise.resolve(moviesMock)

            res.status(200).json({
                data: allMovies,
                message: 'movies listed'
            })
        } catch(err){
            next(err)
        }
    })

    router.get('/:movieid', async function (req, res, next) {
        try {
            const singleMovie = await Promise.resolve(moviesMock[0])

            res.status(200).json({
                data: singleMovie,
                message: 'movie selected',

            })

        } catch(err) {
            next(err)
        }
    })

    router.post('/new/movie:newid', async (req, res, next)=> {
        try {
            const newMovie = await Promise.resolve(moviesMock[0]).json

            res.status(201).json({
                data: newMovie,
                message: 'new Movie'
            })
        } catch(err) {
            next(err)
        }
    })


    router.put('/new/movie:newid', async (req, res, next)=> {
        try {
            const newMovie = await Promise.resolve(moviesMock[0]).json

            res.status(201).json({
                data: newMovie,
                message: 'new Movie'
            })
        } catch(err) {
            next(err)
        }
    })
};

module.export = moviesApi;
