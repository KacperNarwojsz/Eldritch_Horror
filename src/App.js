import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import CthulhuLvlChar from './pages/CthulhuLvlChar';
import LvlChar from './Components/LvlChar';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        route: 'home',
        level: '',
        characters: '',
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

  routeToCthulhuLvlChar = (event) => {
    this.setState({ route: 'CthulhuLvlChar'})
  }

  routeToCthulhu = (event) => {
    this.setState({ route: 'Cthulhu'})
  }

  setLvlEasy = (event) => {
    this.setState({ level: 'Easy'})
  }

  setLvlNormal = (event) => {
    this.setState({ level: 'Normal'})
  }

  setLvlHard = (event) => {
    this.setState({ level: 'Hard'})
  }


  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch(route) {

        case "Azathoth":          return <Azathoth />;
        case "YogSothoth":        return <YogSothoth />;
        case "ShubNiggurath":     return <ShubNiggurath />;
        case "Cthulhu":           return <Cthulhu />;
        case "CthulhuLvlChar":    return <CthulhuLvlChar 
                                            loadCthulhu={this.routeToCthulhu}
                                            chooseLvlEasy={this.setLvlEasy}
                                            chooseLvlNormal={this.setLvlNormal}
                                            chooseLvlHard={this.setLvlHard}
                                          />;
        default:                  return <Home 
                                            loadAzathoth={this.routeToAzathoth} 
                                            loadYog={this.routeToYog}
                                            loadShub={this.routeToShub}
                                            loadCthulhuLvlChar={this.routeToCthulhuLvlChar}
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
