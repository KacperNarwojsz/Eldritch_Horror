import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import CthulhuLvlChar from './pages/CthulhuLvlChar';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        route: 'home',
        level: false,
        characters: false,
        start: false,
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

  setCharTo1 = (event) => {
    this.setState({characters: 1})
  }

  setCharTo2 = (event) => {
    this.setState({characters: 2})
  }

  setCharTo3 = (event) => {
    this.setState({characters: 3})
  }

  setCharTo4 = (event) => {
    this.setState({characters: 4})
  }

  setCharTo5 = (event) => {
    this.setState({characters: 5})
  }

  setCharTo6 = (event) => {
    this.setState({characters: 6})
  }

  setCharTo7 = (event) => {
    this.setState({characters: 7})
  }

  setCharTo8 = (event) => {
    this.setState({characters: 8})
  }

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch(route) {

        case "Azathoth":          return <Azathoth />;
        case "YogSothoth":        return <YogSothoth />;
        case "ShubNiggurath":     return <ShubNiggurath />;
        case "Cthulhu":           return <Cthulhu 
                                            level={this.state.level}
                                            characters={this.state.characters}
                                          />;
        case "CthulhuLvlChar":    return <CthulhuLvlChar 
                                            loadCthulhu={this.routeToCthulhu}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            allowanceToStart={this.state.start}
                                            chooseLvlEasy={this.setLvlEasy}
                                            chooseLvlNormal={this.setLvlNormal}
                                            chooseLvlHard={this.setLvlHard}
                                            chooseCharNo1={this.setCharTo1} chooseCharNo2={this.setCharTo2}
                                            chooseCharNo3={this.setCharTo3} chooseCharNo4={this.setCharTo4}
                                            chooseCharNo5={this.setCharTo5} chooseCharNo6={this.setCharTo6}
                                            chooseCharNo7={this.setCharTo7} chooseCharNo8={this.setCharTo8}
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
