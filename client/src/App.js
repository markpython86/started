import React, { Component } from 'react';
import MovieCard from './components/MovieCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import API from "./utils/API";
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    spacing: '16',
    movies: [],
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
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

  deleteMovie = id => {
    API.deleteMovie(id)
      .then(res => this.loadMovies())
      .catch(err => console.log(err));
  };
  render() {
     const { classes } = this.props;
    const { spacing } = this.state;
    return (
      
      <div className="App">
       
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {this.state.movies.map(movie => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  genre={movie.genre}
                  image={movie.image}
                  year={movie.year}
                />
              ))}
          </Grid>
        </Grid>
        </Grid>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
