import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Home from './Pages/Movies'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component= {Home} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default (App);
