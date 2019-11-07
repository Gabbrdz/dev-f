const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
    async getMovies(){
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

    async getMovie(){
        const movie = await Promise.resolve(moviesMock);
        return movie || {};
    }

    async createMovie(){
        const createMovieID = await Promise.resolve(moviesMock[0].id);
        return createMovieID;
    }

    async updateMovie() {
        const updateMovieID = await Promise.resolve(moviesMock[0].id)
        return updateMovieID;
    }

    async deleteMovie() {
        const deleteMovieID = await Promise.resolve(moviesMock[0].id);
        return deleteMovieID;

    }

}

module.exports = MoviesService