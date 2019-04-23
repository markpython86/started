import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Nav from '../components/Nav';

import SearchBar from '../components/SearchBar';
import { withStyles } from '@material-ui/core/styles';
// import API from "../utils/API";
import '../App.css';

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
    searched: ''
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      
      <div className="App">
       <Nav/>
       
        <header className="App-header">
        <SearchBar 
        saveSearched={this.saveSearched}
        findMovie={this.findMovie}
        />
          <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            
           </Grid>
        </Grid>
        </Grid>
        </header>
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
