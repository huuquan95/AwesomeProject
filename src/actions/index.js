import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE,
    ADD_REMINDER_MOVIES,
    DELETE_REMINDER_MOVIES
} from './actionTypes';

export const loadMovies = (movies = [], movieType = 'popular') => {
    return {
        type: LOAD_MOVIES,
        movies: movies,
        movieType: movieType
    }
}

export const changDisplayMode = () => {
    return {
        type: CHANGE_DISPLAY_MODE
    }
}

export const toggleFavoriteMovie = (movie) => {
    return {
        type: TOGGLE_FAVORITE_MOVIE,
        movie: movie
    }
}

export const addReminderMovies = (movie) => {
    return {
        type: ADD_REMINDER_MOVIES,
        movie: movie
    }
}

export const deleteReminderMovies = (movie) => {
    return {
        type: DELETE_REMINDER_MOVIES,
        movie: movie
    }
}