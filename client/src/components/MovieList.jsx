import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

// create a function to populate a list of movies
var MovieList = (props) => (
  <div>
    {props.movies.map( item =>
      <MovieListEntry movie={item} watchedStyle={props.watchedStyle} itemWatched={props.itemWatched} />
    )}
  </div>
)

export default MovieList;