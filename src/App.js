import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import CthulhuLvlChar from './pages/CthulhuLvlChar';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import chooseRandom from './Components/Shuffler';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.mythosDeck = []
    this.mythosDeckStage1 = []
    this.mythosDeckStage2 = []
    this.mythosDeckStage3 = []
    this.mythosDeckGreenEasy = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8']
    this.mythosDeckGreenNormal = ['EG1','EG2','EG3','EG4','EG5','NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
    this.mythosDeckGreenHard = ['NG1','NG2','NG3','NG4','NG5','NG6','NG7','NG8','HG1','HG2','HG3','HG4','HG5']
    this.mythosDeckYellowEasy = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11']
    this.mythosDeckYellowNormal = ['EY1','EY2','EY3','EY4','EY5','NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
    this.mythosDeckYellowHard = ['NY1','NY2','NY3','NY4','NY5','NY6','NY7','NY8','NY9','NY10','NY11','HY1','HY2','HY3','HY4','HY5']
    this.mythosDeckBlueEasy = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4']
    this.mythosDeckBlueNormal = ['EB1','EB2','EB4','NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
    this.mythosDeckBlueHard = ['NB1','NB2','NB3','NB4','HB1','HB2','HB3','HB4']
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
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowEasy)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueEasy)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueEasy));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenEasy)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenEasy)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowEasy));
    this.setState({ level: 'Easy'})
  }

  setLvlNormal = () => {
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowNormal)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueNormal)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueNormal));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenNormal)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenNormal)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowNormal));
    this.setState({ level: 'Normal'})
  }

  setLvlHard = () => {
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowHard)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueHard)); 
    this.mythosDeck.push(chooseRandom(this.mythosDeckBlueHard));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckGreenHard)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard)); 
    this.mythosDeckStage2.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckGreenHard)); 
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
    this.mythosDeckStage3.push(chooseRandom(this.mythosDeckYellowHard));
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

        case "Azathoth":          return <Azathoth />;
        case "YogSothoth":        return <YogSothoth />;
        case "ShubNiggurath":     return <ShubNiggurath />;
        case "Cthulhu":           return <Cthulhu 
                                            loadChulhuLvlChar={this.routeToCthulhuLvlChar}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            mythosDeck={this.mythosDeck}
                                            mythosDeckStage2={this.mythosDeckStage2}
                                            mythosDeckStage3={this.mythosDeckStage3}
                                            victory={this.routeToVictory}
                                            defeat={this.routeToDefeat}
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
