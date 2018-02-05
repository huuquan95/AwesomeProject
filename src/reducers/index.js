import { combineReducers } from 'redux';

import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE,
    ADD_REMINDER_MOVIES,
    DELETE_REMINDER_MOVIES
} from '../actions/actionTypes';

import { AsyncStorage } from 'react-native';
const defaultState = {
    movies: [],
    display_mode: 'detail',
    favoriteMovies: [],
    reminderMovies: [],
    movieType: 'popular'
}

const reducers = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MOVIES:
            return {
                ...state,
                movies: action.movies
            }

        case CHANGE_DISPLAY_MODE:
            return {
                ...state,
                display_mode: state.display_mode == 'detail' ? 'grid' : 'detail'
            }

        case TOGGLE_FAVORITE_MOVIE:
            if (state.favoriteMovies.map(movie => { return movie.id }).indexOf(action.movie.id) != -1) {

                return {
                    ...state,
                    favoriteMovies: state.favoriteMovies.filter(movie => (movie.id != action.movie.id))
                }
            }
            else {
                return {
                    ...state,
                    favoriteMovies: state.favoriteMovies.concat(action.movie)
                }
            }

        case ADD_REMINDER_MOVIES:
            if (state.reminderMovies.map(movie => { return movie.id }).indexOf(action.movie.id) != -1)
                return state;
            return {
                ...state,
                reminderMovies: state.reminderMovies.concat(action.movie)
            }

        case DELETE_REMINDER_MOVIES:
            if (state.reminderMovies.map(movie => { return movie.id }).indexOf(action.movie.id) != -1)
                return {
                    ...state,
                    reminderMovies: state.reminderMovies.filter(movie => (movie.id != action.movie.id))
                }

        default:
            console.log('count')
            return state;
    }
}

export default reducers;