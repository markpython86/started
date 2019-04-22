import React, { Component } from 'react';
// import MovieCard from './components/MovieCard';
// import Grid from '@material-ui/core/Grid';
// import Nav from './components/Nav';
// import SearchBar from './components/SearchBar';
// import { withStyles } from '@material-ui/core/styles';
// import API from "./utils/API";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import MovieEdit from './Pages/MovieEdit'
import Page from './Pages/Movies'
import './App.css';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing.unit * 2,
//   },
  
// });

class App extends Component {
  // state = {
  //   spacing: '16',
  //   movies: [],
  //   searched: ''
  // };

  // handleChange = key => (event, value) => {
  //   this.setState({
  //     [key]: value,
  //   });
  // };

  // componentDidMount() {
  //   this.loadMovies();
  // }

  // saveSearched = (search) =>{
  //   this.setState({searched: search})
  // }

  // loadMovies = () => {
  //   API.getMovies()
  //     .then(res =>
  //       this.setState({ movies: res.data})
  //     )
  //     .catch(err => console.log(err));
  // };
  // findMovie = () =>{
  //   console.log(this.state.searched)
  //   API.findMovies(this.state.searched)
  //     .then((res) =>   this.setState({ movies: res.data}))
  //     .catch(err => console.log(err));
  // }
  // deleteMovie = id => {
  //   API.deleteMovie(id)
  //     .then(() => this.loadMovies())
  //     .catch(err => console.log(err));
  // };
  render() {
  //   const { classes } = this.props;
  //   const { spacing } = this.state;
    return (
      
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/movie" component= {MovieEdit} />
        <Route exact path="/" component= {Page} />
        </Switch>
      </Router>
       {/* <Nav/>
       
        <header className="App-header">
        <SearchBar 
        saveSearched={this.saveSearched}
        findMovie={this.findMovie}
        />
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
                  rating={movie.rating}
                />
              ))}
          </Grid>
        </Grid>
        </Grid>
        </header>
         */}
      </div>
    );
  }
}

export default (App);
