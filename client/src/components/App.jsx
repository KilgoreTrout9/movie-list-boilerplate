import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      moviesList: defaultMovies,
      newMovieTitle: '',
      watched: false
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.onListItemWatched = this.onListItemWatched.bind(this);
  }

  handleSearchInput(event) {
    this.setState( {searchValue: event.target.value} );
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    event.target.reset();
    alert('Did you want to search for ' + this.state.searchValue);
    //build a new moviesList
    var newList = this.state.moviesList.filter( (movie) => {
      return movie.title.indexOf(this.state.searchValue) !== -1;
    });
    if( newList.length > 0 ) {
      this.setState( {moviesList: newList} );
    } else {
      alert(`No matches for your input: ${this.state.searchValue}\n--->Returning to original list<---`);
    }
  }

  handleAddInput(event) {
    this.setState( {newMovieTitle: event.target.value} );
  }

  handleAddSubmit(event) {
    event.preventDefault();
    event.target.reset();
    alert(`Did you want to add ${this.state.newMovieTitle}`);
    //build a new moviesList without affecting state
    var newMovie = {'title': this.state.newMovieTitle};
    var newList = this.state.moviesList;
    if (newList === defaultMovies) {
      newList = [];
    }
    newList.push(newMovie);
    this.setState( {moviesList: newList} );
  }

  onListItemWatched() {
    //toggle the state
    this.setState({ watched: !this.state.watched });
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render () {
    var watchedStyle = {
      backgroundColor: this.state.watched ? 'green' : 'white'
    };
    return (
      <div>
        <div className="title">
          <h1>Movie List</h1>
        </div>
        <nav className="addbar">
          <div className="add-movie">
            <div><AddMovie addSubmit={this.handleAddSubmit} addInput={this.handleAddInput} /></div>
          </div>
        </nav>
        <nav className="searchbar">
          <div className="search">
            <div><Search searchSubmit={this.handleSearchSubmit} searchInput={this.handleSearchInput} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="list">
            <div><MovieList movies={this.state.moviesList} watchedStyle={this.watchedStyle} itemWatched={this.onListItemWatched} /></div>
          </div>
        </div>
      </div>
    );
  }

}

// hardcoded movie list
var defaultMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];



//   onListItemClick(newVideo) {
//     this.setState({
//       currentVideo: newVideo,
//     });
//   }

//   getNewVideos(query) {
//     var options = {
//       key: YOUTUBE_API_KEY,
//       query: query
//     }
//     this.props.searchYouTube(options, (videos) =>{
//       this.setState({
//         videos: videos,
//         currentVideo: videos[0]
//       });
//     });
//   }

//   componentDidMount() {
//     this.getNewVideos('cute puppies');
//   }



export default App;