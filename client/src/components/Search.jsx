import React from 'react';

var SearchMovies = (props) => (
  <div>
    <form className="searchbar" onSubmit={props.searchSubmit}>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={props.searchChange} />
      <button className="btn" onClick={props.searchSubmit}>Go!</button>
    </form>
  </div>
)

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default SearchMovies;
