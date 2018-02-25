import {
    LOAD_MOVIES,
    LOAD_MORE_MOVIES,
    LOAD_FAVORITE_MOVIE,
    SET_MOVIE_TYPE,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE,
    LOAD_REMINDER_MOVIES
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

export const loadFavoriteMovies = (favoriteMovies) => {
    return {
        type: LOAD_FAVORITE_MOVIE,
        favoriteMovies: favoriteMovies
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

export const loadReminderMovies = (reminderMovies) => {
    return {
        type: LOAD_REMINDER_MOVIES,
        reminderMovies: reminderMovies
    }
}