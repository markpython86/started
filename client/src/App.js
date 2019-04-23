import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import MovieEdit from './Pages/MovieEdit'
import Page from './Pages/Movies'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/movie" component= {MovieEdit} />
        <Route exact path="/" component= {Page} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default (App);
