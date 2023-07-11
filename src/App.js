import React, { Component } from 'react';
import Home from './pages/Home';
import Cthulhu from './pages/Cthulhu';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        route: 'home'
    }
  }

  routeChange = (event) => {
    if (event.key === 'Enter') {
      this.setState({ route: event.target.value })
    }
  }

  returnHome = (route) => {
    this.setState({ route: 'home'})
  }

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch(route) {

        case "home":        return <Home submitAnswerToMain={this.routeChange}/>;
        case "Cthulhu":     return <Cthulhu />;
        default:            return <Home submitAnswerToMain={this.routeChange}/>;
      }
    }

    return (
      <div className="App">
         <div>{ checkRoute(route) }</div>
      </div>
    );
  }
}

export default App;
