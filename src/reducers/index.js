import { combineReducers } from 'redux';

import {
    LOAD_MOVIES,
    CHANGE_DISPLAY_MODE,
    ADD_FAVORITE_MOVIE,
} from '../actions/actionTypes';

const defaultState = {
    movies: [],
    display_mode: 'detail',
    favoriteMovies: []

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

        case ADD_FAVORITE_MOVIE:
            console.log('FavoriteMovies: ', state.favoriteMovies)
            if (state.favoriteMovies.indexOf(action.movieId) != -1)
                console.log('Have it before', action.movieId);
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.concat(action.movieId)
            }

        default:
            return state; //state does not change
    }
}

export default reducers;