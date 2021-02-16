import React from 'react';

class MovieListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      watched: false,
      moreInfo: false
    }

    this.onWatchedClick = this.onWatchedClick.bind(this);
    this.moreMovieInfoClick = this.moreMovieInfoClick.bind(this);
  }

  moreMovieInfoClick(event) {
    //toggle the state
    this.setState({ moreInfo: !this.state.moreInfo });
    console.log('you are in the more info area');
  }

  onWatchedClick(event) {
    //toggle the state to more info
    this.setState({ watched: !this.state.watched });
    this.props.movie.watched = !this.state.watched;
  }

  // MovieListingHTML(props) {
  //   return <span onClick={this.moreMovieInfoClick}>{this.props.movie.title}</span>;
  // }

  render (props) {
    var greenHighlight = {
      background: this.props.movie.watched ? 'green' : 'none'
    };
    if (!this.state.moreInfo) {
      return (
        <li className="movie-list-entry">
          <span onClick={this.moreMovieInfoClick}>{this.props.movie.title}</span>
          <button
            className="watched-btn"
            style={greenHighlight}
            onClick={this.onWatchedClick}>
            Watched
          </button>
        </li>
      )
    }
    return (
      <li className="movie-list-entry">
        <span onClick={this.moreMovieInfoClick}><h2>{this.props.movie.title}</h2></span>
        <button
          className="watched-btn"
          style={greenHighlight}
          onClick={this.onWatchedClick}>
          Watched
        </button>
        <span>
          <p>Year:  {this.props.movie.year}</p>
          <p>User Score:  {this.props.movie.userScore}</p>
          <p>Rating;  {this.props.movie.rating}</p>
        </span>
      </li>
    )
  }
}

export default MovieListItem;
