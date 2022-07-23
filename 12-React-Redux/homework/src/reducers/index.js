import {
    ADD_MOVIE_FAVORITE,
    GET_MOVIES,
    REMOVE_MOVIE_FAVORITE,
    GET_MOVIE_DETAIL
} from '../actions/index'

//Estado globla inicial
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload)
        }
    }
    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload
        }
    }
    return state;
}
  
export default rootReducer;