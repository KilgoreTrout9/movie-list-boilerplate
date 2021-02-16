import React from 'react';
import MovieListItem from './MovieListItem.jsx';

// create a function to populate a list of movies
var MovieList = function(props) {
  return (
    <ul className="movie-list">
      {props.movies.map( (entry, index) =>
        <MovieListItem
        key={entry.title + index}
        movie={entry} index={index}/>
      )}
    </ul>
  )
}

export default MovieList;