import React, { Component } from 'react';
import Home from './pages/Home';
import AncientOne from './pages/AncientOne';
import AncientLvlChar from './pages/AncientLvlChar';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'Home',
      ancient: false,
      level: false,
      characters: false,
    }
  }

  chooseAzathoth = () => {
    this.setState({ route: 'AncientLvlChar' });
    this.setState({ ancient: 'Azathoth' })
  }

  chooseYogSothoth = () => {
    this.setState({ route: 'AncientLvlChar' });
    this.setState({ ancient: 'YogSothoth' })
  }

  chooseShubNiggurath = () => {
    this.setState({ route: 'AncientLvlChar' });
    this.setState({ ancient: 'ShubNiggurath' })
  }

  chooseCthulhu = () => {
    this.setState({ route: 'AncientLvlChar' });
    this.setState({ ancient: 'Cthulhu' })
  }

  loadAncientOne = () => {
    this.setState({ route: 'AncientOne' });
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
  }

  setLvlNormal = () => {
    this.setState({ level: 'Normal'})
  }

  setLvlHard = () => {
    this.setState({ level: 'Hard'})
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
        case "AncientLvlChar":    return <AncientLvlChar 
                                            ancient={this.state.ancient}
                                            loadAncientOne={this.loadAncientOne}
                                            loadHome={this.routeToHome}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            chooseLvlEasy={this.setLvlEasy}
                                            chooseLvlNormal={this.setLvlNormal}
                                            chooseLvlHard={this.setLvlHard}
                                            chooseCharNo1={this.setCharTo1} chooseCharNo2={this.setCharTo2}
                                            chooseCharNo3={this.setCharTo3} chooseCharNo4={this.setCharTo4}
                                            chooseCharNo5={this.setCharTo5} chooseCharNo6={this.setCharTo6}
                                            chooseCharNo7={this.setCharTo7} chooseCharNo8={this.setCharTo8}
                                          />;
        case "AncientOne":           return <AncientOne 
                                            chooseAzathoth={this.chooseAzathoth}
                                            chooseYogSothoth={this.chooseYogSothoth}
                                            chooseShubNiggurath={this.chooseShubNiggurath}
                                            chooseCthulhu={this.chooseCthulhu}
                                            ancient={this.state.ancient}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            victory={this.routeToVictory}
                                            defeat={this.routeToDefeat}
                                          />;
        case "Victory":           return <Victory 
                                            reloadApp={this.reload}/>
        case "Defeat":            return <Defeat 
                                            reloadApp={this.reload}/>                                  
        default:                  return <Home 
                                            chooseAzathoth={this.chooseAzathoth} 
                                            chooseYogSothoth={this.chooseYogSothoth}
                                            chooseShubNiggurath={this.chooseShubNiggurath}
                                            chooseCthulhu={this.chooseCthulhu}
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
