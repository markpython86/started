import React, { Component } from 'react';
// import logo from './logo.svg';
import API from "./utils/API";
import './App.css';

class App extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    API.getMovies()
      .then(res =>
        this.setState({ movies: res.data})
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
                {this.state.movies.map(movie => (
                  <div key={movie.id}>
                  <hr></hr>
                  <p>{movie.title}</p>
                  <p>{movie.year}</p>
                  <p>{movie.genre}</p>
                            <img src={movie.image} className="App-logo" alt="logo" />

                  <hr></hr>
                  </div>
                ))}
              </div>
        </header>
      </div>
    );
  }
}

export default App;
