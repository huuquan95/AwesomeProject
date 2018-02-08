import {
    LOAD_MOVIES,
    LOAD_MORE_MOVIES,
    SET_MOVIE_TYPE,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE,
    ADD_REMINDER_MOVIES,
    DELETE_REMINDER_MOVIES,
} from './actionTypes';

export const loadMovies = (movies = [], movieType = 'popular') => {
    return {
        type: LOAD_MOVIES,
        movies: movies,
        movieType: movieType
    }
}

export const loadMoreMovies = (movies = [], page = 2) => {
    return {
        type: LOAD_MORE_MOVIES,
        movies: movies,
        page: page
    }
}

export const setMovieType = (movieType) => {
    return {
        type: SET_MOVIE_TYPE,
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

export const addReminderMovies = (movie, reminderTime) => {
    return {
        type: ADD_REMINDER_MOVIES,
        movie: { ...movie, reminderTime: reminderTime }
    }
}

export const deleteReminderMovies = (movie) => {
    return {
        type: DELETE_REMINDER_MOVIES,
        movie: movie
    }
}