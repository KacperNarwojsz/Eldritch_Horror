import React, { Component } from 'react';
import Home from './pages/Home';
import Ancient from './pages/Ancient';
import AncientLvlChar from './pages/AncientLvlChar';
import Victory from './pages/Victory';
import Defeat from './pages/Defeat';
import { ROUTES } from './constants';
import './App.css';

// TO DO:
// Refactor na hooks i typescript
// konteksty

//DONE:
// prettier format on save
// zamiast stringów const

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ROUTES.HOME,
      ancient: false,
      level: false,
      characters: false,
    };
  }

  chooseAncient = (ancient) => {
    this.setState({ route: ROUTES.ANCIENTLVLCHAR, ancient });
  };

  loadAncient = () => {
    this.setState({ route: ROUTES.ANCIENT });
  };

  routeToVictory = () => {
    this.setState({ route: ROUTES.VICTORY });
  };

  routeToDefeat = () => {
    this.setState({ route: ROUTES.DEFEAT });
  };

  routeToHome = () => {
    this.setState({
      route: ROUTES.HOME,
      level: false,
      characters: false,
    });
  };

  reload = () => {
    window.location.reload(true);
  };

  setLvl = (level) => {
    this.setState({ level });
  };

  setCharacters = (characters) => {
    this.setState({ characters });
  };

  render() {
    const { route } = this.state;
    const checkRoute = (route) => {
      switch (route) {
        case ROUTES.ANCIENTLVLCHAR:
          return (
            <AncientLvlChar
              ancient={this.state.ancient}
              loadAncient={this.loadAncient}
              loadHome={this.routeToHome}
              level={this.state.level}
              characters={this.state.characters}
              setLvl={this.setLvl}
              setCharacters={this.setCharacters}
            />
          );
        case ROUTES.ANCIENT:
          return (
            <Ancient
              chooseAncient={this.chooseAncient}
              ancient={this.state.ancient}
              level={this.state.level}
              characters={this.state.characters}
              victory={this.routeToVictory}
              defeat={this.routeToDefeat}
            />
          );
        case ROUTES.VICTORY:
          return <Victory reloadApp={this.reload} />;
        case ROUTES.DEFEAT:
          return <Defeat reloadApp={this.reload} />;
        default:
          return <Home chooseAncient={this.chooseAncient} />;
      }
    };

    return (
      <div className="App">
        <div>{checkRoute(route)}</div>
      </div>
    );
  }
}

export default App;
