import { combineReducers } from 'redux';

import {
    LOAD_MOVIES,
    LOAD_MORE_MOVIES,
    LOAD_FAVORITE_MOVIE,
    SET_MOVIE_TYPE,
    CHANGE_DISPLAY_MODE,
    LOAD_REMINDER_MOVIES
} from '../actions/actionTypes';

const defaultState = {
    movies: [],
    display_mode: 'detail',
    favoriteMovies: [],
    reminderMovies: [],
    movieType: 'popular',
    page: 1
}

const reducers = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MOVIES:
            return {
                ...state,
                movies: action.movies
            }

        case LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: state.movies.concat(action.movies),
                page: action.page
            }

        case SET_MOVIE_TYPE:
            return {
                ...state,
                movieType: action.movieType
            }

        case CHANGE_DISPLAY_MODE:
            return {
                ...state,
                display_mode: state.display_mode == 'detail' ? 'grid' : 'detail'
            }

        case LOAD_REMINDER_MOVIES:
            return {
                ...state,
                reminderMovies: action.reminderMovies
            }

        case LOAD_FAVORITE_MOVIE:
            return {
                ...state,
                favoriteMovies: action.favoriteMovies
            }

        default:
            return state;
    }
}

export default reducers;