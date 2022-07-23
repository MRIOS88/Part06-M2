export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';

//Action creator ---> una FUNCION!
//Agrego películas a favoritos
export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };//Action {}
  }

//Pedir las pelis a la API
  export function getMovies(titulo) {
    return function(dispatch) {//no olvidar de retornar la fn
      return fetch("http://www.omdbapi.com/?apikey=33084a5d&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }
//con axios instalar en consola npm install axios
//luego en este archivo arriba import axios form 'axios' (im´porta la librería)
//   export function getMovies(titulo) {
//     return function(dispatch) {//no olvidar de retornar la fn
//       return axios.get("http://www.omdbapi.com/?apikey=33084a5d&s=" + titulo)
//         .then(response => response.data)
//         .then(data => {
//           dispatch({ type: "GET_MOVIES", payload: json });
//         });
//     };
//   }

export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload: id }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=33084a5d&i=${id}&plot=full`)
        .then(respuesta => respuesta.json())
        .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json})
        })
    }
}

