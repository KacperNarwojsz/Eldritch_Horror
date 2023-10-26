import React, { Component } from 'react';
import Home from './pages/Home';
import Azathoth from './pages/Azathoth';
import AzathothLvlChar from './pages/AzathothLvlChar';
import YogSothoth from './pages/YogSothoth';
import ShubNiggurath from './pages/ShubNiggurath';
import Cthulhu from './pages/Cthulhu';
import CthulhuLvlChar from './pages/CthulhuLvlChar';
import chooseRandom from './Components/Shuffler';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 
                                         'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                         'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                         'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                         'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                         'Tunguska', 'Tunguska', 'Tunguska']                                
    this.shuffleDeckReverseExpeditionFiltered = ['Antarctica', 'Antarctica', 'Antarctica', 
                                                 'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                                 'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                                 'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                                 'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                                 'Tunguska', 'Tunguska', 'Tunguska']
    this.discardDeckReverseExpedition = []
    this.deletedDeckReverseExpedition = []
    this.shuffleDeckExpeditionAntarctica = [1,2,3]
    this.shuffleDeckExpeditionTheAmazon = [1,2,3]
    this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
    this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
    this.shuffleDeckExpeditionThePyramids = [1,2,3]
    this.shuffleDeckExpeditionTunguska = [1,2,3]
    this.discardDeckExpedition = []  
    this.state = {
      route: "'Home'",
      level: false,
      characters: false,
      // route: "Cthulhu",
      // level: "Easy",
      // characters: 3,
      expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
      expeditionPreviousReverse: 0,
      expeditionShuffle: 0,
      deletedAntarctica: false,
      deletedTheAmazon: false,
      deletedTheHeartofAfrica: false,
      deletedTheHimalayas: false,
      deletedThePyramids: false,
      deletedTunguska: false,
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //     if  (prevState.expeditionPreviousReverse !== this.state.expeditionPreviousReverse || 
  //          prevState.expeditionShuffle !== this.state.expeditionShuffle) {
  //         this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
  //         this.discardDeckExpedition.push(this.state.expeditionShuffle);
  //     }
  // } 

  componentDidUpdate() {
    if (this.shuffleDeckReverseExpedition.length < 1) {
        this.shuffleDeckReverseExpedition = this.shuffleDeckReverseExpeditionFiltered.slice();
    }  
  }

  routeToAzathoth = () => {
    this.setState({ route: 'Azathoth'})
  }

  routeToAzathothLvlChar = () => {
    this.setState({ route: 'AzathothLvlChar'})
  }

  routeToYog = () => {
    this.setState({ route: 'YogSothoth'})
  }

  routeToYogLvlChar = () => {
    this.setState({ route: 'YogSothothLvlChar'})
  }

  routeToShub = () => {
    this.setState({ route: 'ShubNiggurath'})
  }

  routeToShubLvlChar = () => {
    this.setState({ route: 'ShubNiggurathLvlChar'})
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

  handleExpeditionShuffle = () => {
      switch (this.state.expeditionReverseShuffle) {
          case 'Antarctica':
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionAntarctica)});
                  if (this.shuffleDeckExpeditionAntarctica.length < 1) {
                      this.shuffleDeckExpeditionAntarctica = [1,2,3]
                  }
          break;        
          case 'TheAmazon':
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheAmazon)});
                  if (this.shuffleDeckExpeditionTheAmazon.length < 1) {
                      this.shuffleDeckExpeditionTheAmazon = [1,2,3]
                  }
          break;             
          case 'TheHeartofAfrica':
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHeartofAfrica)});
                  if (this.shuffleDeckExpeditionTheHeartofAfrica.length < 1) {
                      this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
                  }
          break;     
          case 'TheHimalayas':
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHimalayas)});
                  if (this.shuffleDeckExpeditionTheHimalayas.length < 1) {
                      this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
                  }
          break;     
          case 'ThePyramids':
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionThePyramids)});
                  if (this.shuffleDeckExpeditionThePyramids.length < 1) {
                      this.shuffleDeckExpeditionThePyramids = [1,2,3]
                  }
          break;          
          default:
              this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTunguska)});
                  if (this.shuffleDeckExpeditionTunguska.length < 1) {
                      this.shuffleDeckExpeditionTunguska = [1,2,3]
                  }
      }
      this.setState(prevState => ({expeditionPreviousReverse: prevState.expeditionReverseShuffle})); 
      this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)}); 
  }

  handleExpeditionDiscard = () => {
      this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
      this.discardDeckExpedition.push(this.state.expeditionShuffle);
  }

  removeExpedition = () => {
      if      (this.state.expeditionReverseShuffle === 'Antarctica')       {this.setState({deletedAntarctica: true})} 
      else if (this.state.expeditionReverseShuffle === 'TheAmazon')        {this.setState({deletedTheAmazon: true})} 
      else if (this.state.expeditionReverseShuffle === 'TheHeartofAfrica') {this.setState({deletedTheHeartofAfrica: true})}
      else if (this.state.expeditionReverseShuffle === 'TheHimalayas')     {this.setState({deletedTheHimalayas: true})} 
      else if (this.state.expeditionReverseShuffle === 'ThePyramids')      {this.setState({deletedThePyramids: true})} 
      else if (this.state.expeditionReverseShuffle === 'Tunguska')         {this.setState({deletedTunguska: true})}
      this.deletedDeckReverseExpedition.push(this.state.expeditionReverseShuffle);
      let filterExpeditions = this.shuffleDeckReverseExpedition.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
      this.shuffleDeckReverseExpedition = filterExpeditions
      let backupExpeditions = this.shuffleDeckReverseExpeditionFiltered.filter(currentExpedition => currentExpedition !== this.state.expeditionReverseShuffle)
      this.shuffleDeckReverseExpeditionFiltered = backupExpeditions
      this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)}) 
  }

  // undoRemoveExpedition = () => {
  //     if      (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Antarctica')       {this.setState({deletedAntarctica: false})} 
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheAmazon')        {this.setState({deletedTheAmazon: false})} 
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHeartofAfrica') {this.setState({deletedTheHeartofAfrica: false})}
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'TheHimalayas')     {this.setState({deletedTheHimalayas: false})} 
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'ThePyramids')      {this.setState({deletedThePyramids: false})} 
  //     else if (this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1] === 'Tunguska')         {this.setState({deletedTunguska: false})}
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpedition.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.shuffleDeckReverseExpeditionFiltered.push(this.deletedDeckReverseExpedition[this.deletedDeckReverseExpedition.length-1])
  //     this.deletedDeckReverseExpedition.pop()
  // }

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch(route) {

        case "AzathothLvlChar":    return <AzathothLvlChar 
                                            loadAzathoth={this.routeToAzathoth}
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
        case "Azathoth":          return <Azathoth 
                                            loadAzathothLvlChar={this.routeToAzathothLvlChar}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            handleExpeditionShuffle={this.handleExpeditionShuffle} 
                                            handleExpeditionDiscard={this.handleExpeditionDiscard}
                                            expeditionReverseShuffle={this.state.expeditionReverseShuffle} 
                                            expeditionPreviousReverse={this.state.expeditionPreviousReverse} 
                                            expeditionShuffle={this.state.expeditionShuffle} 
                                            discardDeckReverseExpedition={this.discardDeckReverseExpedition}
                                            discardDeckExpedition={this.discardDeckExpedition} 
                                            deletedDeckReverseExpedition={this.deletedDeckReverseExpedition}
                                            deletedAntarctica={this.state.deletedAntarctica}
                                            deletedTheAmazon={this.state.deletedTheAmazon}
                                            deletedTheHeartofAfrica={this.state.deletedTheHeartofAfrica}
                                            deletedTheHimalayas={this.state.deletedTheHimalayas}
                                            deletedThePyramids={this.state.deletedThePyramids}
                                            deletedTunguska={this.state.deletedTunguska}
                                            removeExpedition={this.removeExpedition}
                                            ancient={this.state.route}
                                            victory={this.routeToVictory}
                                            defeat={this.routeToDefeat}
                                          />;
        case "YogSothoth":        return <YogSothoth />;
        case "ShubNiggurath":     return <ShubNiggurath />;
        case "CthulhuLvlChar":    return <CthulhuLvlChar 
                                            loadCthulhu={this.routeToCthulhu}
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
        case "Cthulhu":           return <Cthulhu 
                                            loadCthulhuLvlChar={this.routeToCthulhuLvlChar}
                                            level={this.state.level}
                                            characters={this.state.characters}
                                            handleExpeditionShuffle={this.handleExpeditionShuffle} 
                                            handleExpeditionDiscard={this.handleExpeditionDiscard}
                                            expeditionReverseShuffle={this.state.expeditionReverseShuffle} 
                                            expeditionPreviousReverse={this.state.expeditionPreviousReverse} 
                                            expeditionShuffle={this.state.expeditionShuffle} 
                                            discardDeckReverseExpedition={this.discardDeckReverseExpedition}
                                            discardDeckExpedition={this.discardDeckExpedition} 
                                            deletedDeckReverseExpedition={this.deletedDeckReverseExpedition}
                                            deletedAntarctica={this.state.deletedAntarctica}
                                            deletedTheAmazon={this.state.deletedTheAmazon}
                                            deletedTheHeartofAfrica={this.state.deletedTheHeartofAfrica}
                                            deletedTheHimalayas={this.state.deletedTheHimalayas}
                                            deletedThePyramids={this.state.deletedThePyramids}
                                            deletedTunguska={this.state.deletedTunguska}
                                            removeExpedition={this.removeExpedition}
                                            ancient={this.state.route}
                                            victory={this.routeToVictory}
                                            defeat={this.routeToDefeat}
                                          />;
        case "Victory":           return <Victory 
                                            reloadApp={this.reload}/>
        case "Defeat":            return <Defeat 
                                            reloadApp={this.reload}/>                                  
        default:                  return <Home 
                                            loadAzathothLvlChar={this.routeToAzathothLvlChar} 
                                            loadYogLvlChar={this.routeToYogLvlChar}
                                            loadShubLvlChar={this.routeToShubLvlChar}
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
