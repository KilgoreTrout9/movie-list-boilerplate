import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
    <form id="search-bar" onSubmit={props.searchSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={props.searchInput}
      />
      <button className="btn">
        <span type="reset" className="glyphicon glyphicon-search">Go!</span>
      </button>
    </form>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
