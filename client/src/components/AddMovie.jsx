import React from 'react';

var AddMovie = (props) => (
  <div>
    <form className="addbar" onSubmit={props.addSubmit}>
      <input
        name="new-movie"
        type="text"
        placeholder="Add Title"
        onChange={props.addChange} />
      <button className="add-btn" onClick={props.addSubmit}>Add</button>
    </form>
  </div>
)

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default AddMovie;
