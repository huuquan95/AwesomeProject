import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    ADD_FAVORITE_MOVIE
} from './actionTypes';

export const loadMovies = (movies = []) => {
    // console.log("Actions LoadMovies: ", movies)
    return {
        type: LOAD_MOVIES,
        movies: movies
    }
}

export const changDisplayMode = () => {
    // console.log("Actions ChangeDisplayMode: ")
    return {
        type: CHANGE_DISPLAY_MODE
    }
}

export const addFavoriteMovie = (movieId) => {
    console.log("Actions AddFavoriteMovie: ", movieId)
    return {
        type: ADD_FAVORITE_MOVIE,
        movieId: movieId
    }
}