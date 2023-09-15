import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import CthulhuLvlChar from './pages/CthulhuLvlChar';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.mythosDeckOut = ['NB1','NB2','NB3','NB4']
    this.state = {
        route: "'Home'",
        level: false,
        characters: false,
        // route: "Cthulhu",
        // level: "Easy",
        // characters: 3,
        start: false,
    }
  }

  routeToAzathoth = () => {
    this.setState({ route: 'Azathoth'})
  }

  routeToYog = () => {
    this.setState({ route: 'YogSothoth'})
  }

  routeToShub = () => {
    this.setState({ route: 'ShubNiggurath'})
  }

  routeToCthulhuLvlChar = () => {
    this.setState({ route: 'CthulhuLvlChar'})
  }

  routeToCthulhu = () => {
    this.setState({ route: 'Cthulhu'})
  }

  routeToVictory = () => {
    this.setState({ route: 'Victory'})
  }

  routeToDefeat = () => {
    this.setState({ route: 'Defeat'})
  }

  routeToHome = () => {
    this.setState({ route: 'Home'})
    this.setState({ level: false})
    this.setState({ characters: false})
  }

  reload = () => {
    window.location.reload(true);
  }

  setLvlEasy = () => {
    this.setState({ level: 'Easy'})
    // this.setState({ mythosDeck: ['EB1','EB2','EB4']})
  }

  setLvlNormal = () => {
    this.setState({ level: 'Normal'})
    // this.setState({ mythosDeck: ['NB1','NB2','NB3','NB4']})
  }

  setLvlHard = () => {
    this.setState({ level: 'Hard'})
    // this.setState({ mythosDeck: ['HB1','HB2']})
  }

  setCharTo1 = () => {
    this.setState({characters: 1})
  }

  setCharTo2 = () => {
    this.setState({characters: 2})
  }

  setCharTo3 = () => {
    this.setState({characters: 3})
  }

  setCharTo4 = () => {
    this.setState({characters: 4})
  }

  setCharTo5 = () => {
    this.setState({characters: 5})
  }

  setCharTo6 = () => {
    this.setState({characters: 6})
  }

  setCharTo7 = () => {
    this.setState({characters: 7})
  }

  setCharTo8 = () => {
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
                                            loadChulhuLvlChar={this.routeToCthulhuLvlChar}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            victory={this.routeToVictory}
                                            defeat={this.routeToDefeat}
                                            mythosDeckOut={this.mythosDeckOut}
                                          />;
        case "CthulhuLvlChar":    return <CthulhuLvlChar 
                                            loadCthulhu={this.routeToCthulhu}
                                            loadHome={this.routeToHome}
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
        case "Victory":           return <Victory 
                                            reloadApp={this.reload}/>
        case "Defeat":            return <Defeat 
                                            reloadApp={this.reload}/>                                  
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
