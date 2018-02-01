import { combineReducers } from 'redux';

import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    TOGGLE_FAVORITE_MOVIE,
} from '../actions/actionTypes';

const defaultState = {
    movies: [],
    display_mode: 'detail',
    favoriteMovies: [],
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
            var index = state.favoriteMovies.indexOf(action.movieId)
            if (index != -1) {
                state.favoriteMovies.splice(index, 1);
                return {
                    ...state,
                    favoriteMovies: state.favoriteMovies
                }
            }
            else {
                return {
                    ...state,
                    favoriteMovies: state.favoriteMovies.concat(action.movieId)
                }
            }

        default:
            return state;
    }
}

export default reducers;