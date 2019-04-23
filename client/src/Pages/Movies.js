import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Grid from '@material-ui/core/Grid';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import { withStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import './style.css';

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
    
    movies: [],
    searched: '',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    this.loadMovies();
  }

  saveSearched = (search) =>{
    this.setState({searched: search})
  }

  loadMovies = () => {
    API.getMovies()
      .then(res =>
        this.setState({ movies: res.data})
      )
      .catch(err => console.log(err));
  };
  findMovie = () =>{
    console.log(this.state.searched)
    API.findMovies(this.state.searched)
      .then((res) =>   this.setState({ movies: res.data}))
      .catch(err => console.log(err));
  }
  deleteMovie = id => {
    API.deleteMovie(id)
      .then(() => this.loadMovies())
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    // const { spacing } = this.state;
    return (
      
      <div className="App">
       <Nav/>
       
        <header className="App-header">
        <SearchBar 
        saveSearched={this.saveSearched}
        findMovie={this.findMovie}
        />
         <div className={classes.root}>
      <Grid container spacing={8}>
          {
                (this.state.movies.length === 0) ?
                  (
                    <Grid className={'card'} container item xs={12}>
                      <MovieCard
                        title={'No movie Found'}
                        image={"https://www.smileysapp.com/emojis/sorry-emoticon.png"}
                      />
                    </Grid>)
                  :
                  (this.state.movies.map((movie ,index) => (
                    <Grid key={index} className={'card'} container item lg={4} md={6} xs={12} sm={12}>
                      <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        genre={movie.genre}
                        image={movie.image}
                        year={movie.year}
                        rating={movie.rating}
                      />
                    </Grid>
                  )))

          }
            
          </Grid>
        {/* </Grid */}
        </div>
        </header>
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
