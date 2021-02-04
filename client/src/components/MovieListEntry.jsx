import React from 'react';

var MovieListEntry = (props) => (
  <div className="movie-list">
    <div className="movie-list-entry">{props.movie.title}</div>
    <button
      className="watched-btn"
      style={props.watchedStyle}
      onClick={props.itemWatched}
    >Watched</button>
  </div>
)

export default MovieListEntry