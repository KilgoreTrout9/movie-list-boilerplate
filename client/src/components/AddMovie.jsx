import React from 'react';

var AddMovie = (props) => (
  <div className="add-bar form-inline">
    <form id="add-movie-bar" onSubmit={props.addSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Add movie title here"
        onChange={props.addInput}
      />
      <button className="add-btn">
        <span type="reset" className="add-btn">Add</span>
      </button>
    </form>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default AddMovie;
