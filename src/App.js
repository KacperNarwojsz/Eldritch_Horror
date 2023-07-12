import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        route: 'home'
    }
  }

  routeToAzathoth = (event) => {
    this.setState({ route: 'Azathoth'})
  }

  routeToYog = (event) => {
    this.setState({ route: 'YogSothoth'})
  }

  routeToShub = (event) => {
    this.setState({ route: 'ShubNiggurath'})
  }

  routeToCthulhu = (event) => {
    this.setState({ route: 'Cthulhu'})
  }

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch(route) {

        case "Azathoth":          return <Azathoth />;
        case "YogSothoth":        return <YogSothoth />;
        case "ShubNiggurath":     return <ShubNiggurath />;
        case "Cthulhu":           return <Cthulhu />;
        default:                  return <Home 
                                            loadAzathoth={this.routeToAzathoth} 
                                            loadYog={this.routeToYog}
                                            loadShub={this.routeToShub}
                                            loadCthulhu={this.routeToCthulhu}
                                          />;
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
