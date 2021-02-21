import axios from 'axios';
import TMDB_API_KEY from '../config/tmdb.js'

const getMovieData = (string) => {
  var searchString = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${string}`;
  axios.get(searchString)
    .then( data => {
      console.log(data.data.results)
      return data.data.results
  });
};

export default getMovieData;