import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE
} from './actionTypes';

export const loadMovies = (movies = [], movieType = 'popular') => {
    // console.log("Actions LoadMovies: ", movies)
    return {
        type: LOAD_MOVIES,
        movies: movies,
        movieType: movieType
    }
}

export const changDisplayMode = () => {
    // console.log("Actions ChangeDisplayMode: ")
    return {
        type: CHANGE_DISPLAY_MODE
    }
}

export const toggleFavoriteMovie = (movieId) => {
    console.log("Actions toggleFavoriteMovie: ", movieId)
    return {
        type: TOGGLE_FAVORITE_MOVIE,
        movieId: movieId
    }
}