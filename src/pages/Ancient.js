import React, { Component } from 'react';
import EncountersCards from '../Components/EncountersCards';
import EldritchBoard from '../Components/EldritchBoard';
import AncientBoard from '../Components/AncientBoard';
import BackBoardButton from '../Components/BackBoardButton';
import SurrenderButton from '../Components/SurrenderButton';
import chooseRandom from '../Components/Shuffler';
import { ANCIENTS, CARDS, EXPEDITIONDECK, EXPEDITIONS } from '../constants';
import './AllPages.css';

// TO DO:
// close() do przerobienia bez nawiasów

// DONE:
// karty do contstants.js
// Niejawny elseif na obiekcie

class Ancient extends Component {
  constructor({ ancient, level }) {
    super();
    this.shuffleDeckReverseExpedition = [...EXPEDITIONDECK];
    this.shuffleDeckReverseExpeditionFiltered = [...EXPEDITIONDECK];
    this.discardDeckReverseExpedition = [];
    this.deletedDeckReverseExpedition = [];
    this.shuffleDeckExpeditionAntarctica = [1, 2, 3];
    this.shuffleDeckExpeditionTheAmazon = [1, 2, 3];
    this.shuffleDeckExpeditionTheHeartofAfrica = [1, 2, 3];
    this.shuffleDeckExpeditionTheHimalayas = [1, 2, 3];
    this.shuffleDeckExpeditionThePyramids = [1, 2, 3];
    this.shuffleDeckExpeditionTunguska = [1, 2, 3];
    this.discardDeckExpedition = [];
    this.mythosDeckGreenEasy = [...CARDS.EASY.GREEN, ...CARDS.NORMAL.GREEN];
    this.mythosDeckGreenNormal = [...CARDS.EASY.GREEN, ...CARDS.NORMAL.GREEN, ...CARDS.HARD.GREEN];
    this.mythosDeckGreenHard = [...CARDS.NORMAL.GREEN, ...CARDS.HARD.GREEN];
    this.mythosDeckYellowEasy = [...CARDS.EASY.YELLOW, ...CARDS.NORMAL.YELLOW];
    this.mythosDeckYellowNormal = [...CARDS.EASY.YELLOW, ...CARDS.NORMAL.YELLOW, ...CARDS.HARD.YELLOW];
    this.mythosDeckYellowHard = [...CARDS.NORMAL.YELLOW, ...CARDS.HARD.YELLOW];
    this.mythosDeckBlueEasy = [...CARDS.EASY.BLUE, ...CARDS.NORMAL.BLUE];
    this.mythosDeckBlueNormal = [...CARDS.EASY.BLUE, ...CARDS.NORMAL.BLUE, ...CARDS.HARD.BLUE];
    this.mythosDeckBlueHard = [...CARDS.NORMAL.BLUE, ...CARDS.HARD.BLUE];
    this.mythosDeckGreen = [];
    this.mythosDeckYellow = [];
    this.mythosDeckBlue = [];
    this.mythosDeck = [];
    this.mythosDeckStage2 = [];
    this.mythosDeckStage3 = [];
    this.rumorDeck = [];
    this.state = {
      expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
      expeditionPreviousReverse: 0,
      expeditionShuffle: 0,
      deletedAntarctica: false,
      deletedTheAmazon: false,
      deletedTheHeartofAfrica: false,
      deletedTheHimalayas: false,
      deletedThePyramids: false,
      deletedTunguska: false,
    };

    const levelConfig = {
      Easy: {
        green: this.mythosDeckGreenEasy,
        yellow: this.mythosDeckYellowEasy,
        blue: this.mythosDeckBlueEasy,
      },
      Normal: {
        green: this.mythosDeckGreenNormal,
        yellow: this.mythosDeckYellowNormal,
        blue: this.mythosDeckBlueNormal,
      },
      Hard: {
        green: this.mythosDeckGreenHard,
        yellow: this.mythosDeckYellowHard,
        blue: this.mythosDeckBlueHard,
      },
    };

    this.mythosDeckGreen = levelConfig[level].green;
    this.mythosDeckYellow = levelConfig[level].yellow;
    this.mythosDeckBlue = levelConfig[level].blue;

    const mythosDeckSetup = (green, yellow, blue) => {
      const greenCards = Array.from({ length: green }).map(() => chooseRandom(this.mythosDeckGreen));
      const blueCards = Array.from({ length: blue }).map(() => chooseRandom(this.mythosDeckBlue));
      const yellowCards = Array.from({ length: yellow }).map(() => chooseRandom(this.mythosDeckYellow));

      return [...greenCards, ...blueCards, ...yellowCards];
    };

    if (ancient === ANCIENTS.AZATHOTH) {
      this.mythosDeck = mythosDeckSetup(1, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(2, 3, 1);
      this.mythosDeckStage3 = mythosDeckSetup(2, 4, 0);
    } else if (ancient === ANCIENTS.YOGSOTHOTH) {
      this.mythosDeck = mythosDeckSetup(0, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(2, 3, 1);
      this.mythosDeckStage3 = mythosDeckSetup(3, 4, 0);
    } else if (ancient === ANCIENTS.SHUBNIGGURATH) {
      this.mythosDeck = mythosDeckSetup(1, 2, 1);
      this.mythosDeckStage2 = mythosDeckSetup(3, 2, 1);
      this.mythosDeckStage3 = mythosDeckSetup(2, 4, 0);
    } else if (ancient === ANCIENTS.CTHULHU) {
      this.mythosDeck = mythosDeckSetup(0, 2, 2);
      this.mythosDeckStage2 = mythosDeckSetup(1, 3, 0);
      this.mythosDeckStage3 = mythosDeckSetup(3, 4, 0);
    }
    for (let i = 0; i <= this.mythosDeckBlue.length; i++) {
      this.rumorDeck.push(this.mythosDeckBlue[i]);
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

  handleExpeditionShuffle = () => {
    switch (this.state.expeditionReverseShuffle) {
      case EXPEDITIONS.ANTARCTICA:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionAntarctica),
        });
        if (this.shuffleDeckExpeditionAntarctica.length < 1) {
          this.shuffleDeckExpeditionAntarctica = [1, 2, 3];
        }
        break;
      case EXPEDITIONS.THEAMAZON:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheAmazon),
        });
        if (this.shuffleDeckExpeditionTheAmazon.length < 1) {
          this.shuffleDeckExpeditionTheAmazon = [1, 2, 3];
        }
        break;
      case EXPEDITIONS.THEHEARTOFAFRICA:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHeartofAfrica),
        });
        if (this.shuffleDeckExpeditionTheHeartofAfrica.length < 1) {
          this.shuffleDeckExpeditionTheHeartofAfrica = [1, 2, 3];
        }
        break;
      case EXPEDITIONS.THEHIMALAYAS:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHimalayas),
        });
        if (this.shuffleDeckExpeditionTheHimalayas.length < 1) {
          this.shuffleDeckExpeditionTheHimalayas = [1, 2, 3];
        }
        break;
      case EXPEDITIONS.THEPYRAMIDS:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionThePyramids),
        });
        if (this.shuffleDeckExpeditionThePyramids.length < 1) {
          this.shuffleDeckExpeditionThePyramids = [1, 2, 3];
        }
        break;
      default:
        this.setState({
          expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTunguska),
        });
        if (this.shuffleDeckExpeditionTunguska.length < 1) {
          this.shuffleDeckExpeditionTunguska = [1, 2, 3];
        }
    }
    this.setState((prevState) => ({
      expeditionPreviousReverse: prevState.expeditionReverseShuffle,
    }));
    this.setState({
      expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
    });
  };

  handleExpeditionDiscard = () => {
    this.discardDeckReverseExpedition.push(this.state.expeditionPreviousReverse);
    this.discardDeckExpedition.push(this.state.expeditionShuffle);
  };

  removeExpedition = () => {
    if (this.state.expeditionReverseShuffle === EXPEDITIONS.ANTARCTICA) {
      this.setState({ deletedAntarctica: true });
    } else if (this.state.expeditionReverseShuffle === EXPEDITIONS.THEAMAZON) {
      this.setState({ deletedTheAmazon: true });
    } else if (this.state.expeditionReverseShuffle === EXPEDITIONS.THEHEARTOFAFRICA) {
      this.setState({ deletedTheHeartofAfrica: true });
    } else if (this.state.expeditionReverseShuffle === EXPEDITIONS.THEHIMALAYAS) {
      this.setState({ deletedTheHimalayas: true });
    } else if (this.state.expeditionReverseShuffle === EXPEDITIONS.THEPYRAMIDS) {
      this.setState({ deletedThePyramids: true });
    } else if (this.state.expeditionReverseShuffle === EXPEDITIONS.TUNGUSKA) {
      this.setState({ deletedTunguska: true });
    }
    this.deletedDeckReverseExpedition.push(this.state.expeditionReverseShuffle);
    let filterExpeditions = this.shuffleDeckReverseExpedition.filter(
      (currentExpedition) => currentExpedition !== this.state.expeditionReverseShuffle
    );
    this.shuffleDeckReverseExpedition = filterExpeditions;
    this.shuffleDeckReverseExpeditionFiltered = this.shuffleDeckReverseExpeditionFiltered.filter(
      (currentExpedition) => currentExpedition !== this.state.expeditionReverseShuffle
    );
    if (this.shuffleDeckReverseExpedition.length === 0 && this.shuffleDeckReverseExpeditionFiltered.length !== 0) {
      this.setState({
        expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpeditionFiltered),
      });
    } else {
      this.setState({
        expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
      });
    }
  };

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
    return (
      <div className="ancient" id={`${this.props.ancient}`}>
        <EldritchBoard>
          <div className="top-div">
            <div className="board-div">
              <div className="flex-div">
                <BackBoardButton confirm={() => this.props.chooseAncient(this.state.ancient)} />
                <AncientBoard
                  level={this.props.level}
                  characters={this.props.characters}
                  ancient={this.props.ancient}
                  mythosDeck={this.mythosDeck}
                  mythosDeckStage2={this.mythosDeckStage2}
                  mythosDeckStage3={this.mythosDeckStage3}
                  rumorDeck={this.rumorDeck}
                  expeditionReverseShuffle={this.state.expeditionReverseShuffle}
                  deletedDeckReverseExpedition={this.deletedDeckReverseExpedition}
                  deletedAntarctica={this.state.deletedAntarctica}
                  deletedTheAmazon={this.state.deletedTheAmazon}
                  deletedTheHeartofAfrica={this.state.deletedTheHeartofAfrica}
                  deletedTheHimalayas={this.state.deletedTheHimalayas}
                  deletedThePyramids={this.state.deletedThePyramids}
                  deletedTunguska={this.state.deletedTunguska}
                  removeExpedition={this.removeExpedition}
                  victory={this.props.victory}
                  defeat={this.props.defeat}
                />
                <SurrenderButton confirm={this.props.defeat} />
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <EncountersCards
              handleExpeditionShuffle={this.handleExpeditionShuffle}
              handleExpeditionDiscard={this.handleExpeditionDiscard}
              expeditionReverseShuffle={this.state.expeditionReverseShuffle}
              expeditionPreviousReverse={this.state.expeditionPreviousReverse}
              expeditionShuffle={this.state.expeditionShuffle}
              discardDeckReverseExpedition={this.discardDeckReverseExpedition}
              discardDeckExpedition={this.discardDeckExpedition}
              ancient={this.props.ancient}
              defeat={this.props.defeat}
            />
          </div>
        </EldritchBoard>
      </div>
    );
  }
}

export default Ancient;
