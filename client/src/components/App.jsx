import React from 'react';
import MovieList from './MovieList.jsx';
import SearchMovies from './Search.jsx';
import AddMovie from './AddMovie.jsx';

 class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      newMovie: '',
      searchString: '',
      movieList: defaultMovies,
      onlyWatched: false,
      onlyToWatch: false
    }

    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.onlyWatchedClick = this.onlyWatchedClick.bind(this);
    this.onlyToWatchClick = this.onlyToWatchClick.bind(this);
    this.resetListClick = this.resetListClick.bind(this);
  }

  handleAddChange(event) {
    this.setState({newMovie: event.target.value});
  }

  handleAddSubmit(event) {
    event.preventDefault();
    alert('you have added: ' + this.state.newMovie);
    var updatedList = [];
    if (this.state.movieList !== defaultMovies) {
      updatedList = this.state.movieList;
    }
    updatedList.push({'title': this.state.newMovie});
    this.setState( {movieList: updatedList} );
  }

  handleSearchChange(event) {
    this.setState({searchString: event.target.value});
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    alert('you have searched for: ' + this.state.searchString);
    var searchedList = [];
    //alias the search string and make it lowercase
    var search = this.state.searchString.toLowerCase()
    //iterate through the movie list
    for (var i = 0; i < this.state.movieList.length; i++) {
      //check each movie for the string using indexOf
      var currentTitle = this.state.movieList[i].title.toLowerCase()
      if (currentTitle.indexOf(search) !== -1) {
        //if the string matches push that movie onto the list
        searchedList.push(this.state.movieList[i]);
      }
    }
    //if not in the list send an alert
    if (searchedList.length === 0) {
      alert('Your search string did not match any of the movies on the list');
    } else {
      this.setState( {movieList: searchedList} );
    }
  }

  onlyWatchedClick(event) {
    if (this.state.onlyToWatch) {
      this.state.onlyToWatch = false;
    }
    this.setState({onlyWatched: !this.state.onlyWatched});
  }

  onlyToWatchClick(event) {
    if (this.state.onlyWatched) {
      this.state.onlyWatched = false;
    }
    this.setState({onlyToWatch: !this.state.onlyToWatch});
  }

  resetListClick(event) {
    this.setState({onlyWatched: false});
    this.setState({onlyToWatch: false});
  }

  render () {
    var blueHighlight = {
      background: this.state.onlyWatched ? 'navy' : 'none',
      color: this.state.onlyWatched ? 'orange' : 'black'
    };
    var orangeHighlight = {
      background: this.state.onlyToWatch ? 'orange' : 'none',
      color: this.state.onlyWatched ? 'navy' : 'black'
    };
    if (!this.state.onlyWatched && !this.state.onlyToWatch) {
      var shownMovies = this.state.movieList;
    } else {
      if (this.state.onlyWatched) {
        var shownMovies = this.state.movieList.filter(movie => movie.watched);
      } else {
        var shownMovies = this.state.movieList.filter(movie => !movie.watched)
      }
    }
    return (
      <div>
        <div className="main-title">
          <h1>Movie List</h1>
          <div>
            <AddMovie
            addSubmit={this.handleAddSubmit}
            addChange={this.handleAddChange} />
          </div>
          <div>
            <button
              className="big-button"
              style={blueHighlight}
              onClick={this.onlyWatchedClick}>
              Watched
            </button>
            <button
              className="big-button"
              style={orangeHighlight}
              onClick={this.onlyToWatchClick}>
              To Watch
            </button>
            <button
              className="big-button"
              onClick={this.resetListClick}>
              All Movies
            </button>
            <SearchMovies
            searchSubmit={this.handleSearchSubmit}
            searchChange={this.handleSearchChange} />
          </div>
            <MovieList
            movies={shownMovies} />
        </div>
      </div>
    )
  }
}

// hardcoded movie list
var defaultMovies = [
  {title: 'Mean Girls',
   watched: false,
   year: '2004',
   userScore: 71,
   rating: 'PG-13'},
  {title: 'Hackers',
   watched: false,
   year: '1995',
   userScore: 62,
   rating: 'PG'},
  {title: 'The Grey',
  watched: false},
  {title: 'Sunshine',
  watched: false},
  {title: 'Ex Machina',
  watched: false},
];

export default App;