import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import chooseRandom from './Shuffler';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { ENCOUNTERS } from '../constants';
import './Components.css';

class EncountersCards extends Component {
  constructor({ props }) {
    super(props);
    this.shuffleDeckAmerica = [1, 2, 3, 4, 5, 6, 7, 8];
    this.discardDeckAmerica = [];
    this.shuffleDeckEurope = [1, 2, 3, 4, 5, 6, 7, 8];
    this.discardDeckEurope = [];
    this.shuffleDeckAsiaAustralia = [1, 2, 3, 4, 5, 6, 7, 8];
    this.discardDeckAsiaAustralia = [];
    this.shuffleDeckGeneral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.discardDeckGeneral = [];
    this.shuffleDeckOtherWorld = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    this.discardDeckOtherWorld = [];
    this.shuffleDeckAncientResearch = [1, 2, 3, 4, 5, 6, 7, 8];
    this.discardDeckAncientResearch = [];
    this.shuffleDeckAncientSpecial = [1, 2, 3, 4, 5, 6];
    this.discardDeckAncientSpecial = [];
    this.state = {
      isLoadDone: false,
      americaShuffle: 0,
      europeShuffle: 0,
      asiaaustraliaShuffle: 0,
      generalShuffle: 0,
      otherworldShuffle: 0,
      ancientresearchShuffle: 0,
      ancientspecialShuffle: 0,
    };
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    setInterval(() => {
      this.setState({ isLoadDone: true });
    }, 6000);
  }

  updateDeck = (encounter, cards) => {
    switch (encounter) {
      case ENCOUNTERS.AMERICASHUFFLE:
        this.shuffleDeckAmerica = cards;
        break;
      case ENCOUNTERS.EUROPESHUFFLE:
        this.shuffleDeckEurope = cards;
        break;
      case ENCOUNTERS.ASIAAUSTRALIASHUFFLE:
        this.shuffleDeckAsiaAustralia = cards;
        break;
      case ENCOUNTERS.GENERALSHUFFLE:
        this.shuffleDeckGeneral = cards;
        break;
      case ENCOUNTERS.OTHERWORLDSHUFFLE:
        this.shuffleDeckOtherWorld = cards;
        break;
      case ENCOUNTERS.ANCIENTRESEARCHSHUFFLE:
        this.shuffleDeckAncientResearch = cards;
        break;
      case ENCOUNTERS.ANCIENTSPECIALSHUFFLE:
        this.shuffleDeckAncientSpecial = cards;
        break;
      default:
        break;
    }
  };

  handleEncounterShuffle = (encounter, deck, updateDeck) => {
    this.setState({ [encounter]: chooseRandom(deck) });
    this.updateDeck(encounter, deck);
    if (deck.length < 1) {
      updateDeck();
    }
  };

  handleEncounterDiscard = (encounter) => {
    switch (encounter) {
      case ENCOUNTERS.AMERICASHUFFLE:
        this.discardDeckAmerica.push(this.state.americaShuffle);
        break;
      case ENCOUNTERS.EUROPESHUFFLE:
        this.discardDeckEurope.push(this.state.europeShuffle);
        break;
      case ENCOUNTERS.ASIAAUSTRALIASHUFFLE:
        this.discardDeckAsiaAustralia.push(this.state.asiaaustraliaShuffle);
        break;
      case ENCOUNTERS.GENERALSHUFFLE:
        this.discardDeckGeneral.push(this.state.generalShuffle);
        break;
      case ENCOUNTERS.OTHERWORLDSHUFFLE:
        this.discardDeckOtherWorld.push(this.state.otherworldShuffle);
        break;
      case ENCOUNTERS.ANCIENTRESEARCHSHUFFLE:
        this.discardDeckAncientResearch.push(this.state.ancientresearchShuffle);
        break;
      case ENCOUNTERS.ANCIENTSPECIALSHUFFLE:
        this.discardDeckAncientSpecial.push(this.state.ancientspecialShuffle);
        break;
      default:
        break;
    }
  };

  // propsy popupa onOpen, onClose, buttonClassName, triggerButtonId, idDoTegoFrontuKarty

  render() {
    return (
      <div className="encounters">
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.AMERICASHUFFLE, this.shuffleDeckAmerica, () =>
                this.updateDeck(ENCOUNTERS.AMERICASHUFFLE, [1, 2, 3, 4, 5, 6, 7, 8])
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.AMERICASHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={<button className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'} id="America"></button>}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div className="encounter-card-front" id={`AmericaFront${this.state.americaShuffle}`}>
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              this.discardDeckAmerica.length !== 0 ? (
                <button className="discard-button" id="discardEncounter">
                  ODRZUCONE
                </button>
              ) : null
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper)">
                  {this.discardDeckAmerica.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAmerica.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AmericaFront${this.discardDeckAmerica[this.discardDeckAmerica.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.EUROPESHUFFLE, this.shuffleDeckEurope, () =>
                this.updateDeck(ENCOUNTERS.EUROPESHUFFLE, [1, 2, 3, 4, 5, 6, 7, 8])
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.EUROPESHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={<button className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'} id="Europe"></button>}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div className="encounter-card-front" id={`EuropeFront${this.state.europeShuffle}`}>
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.discardDeckEurope.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.discardDeckEurope.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckEurope.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`EuropeFront${this.discardDeckEurope[this.discardDeckEurope.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.ASIAAUSTRALIASHUFFLE, this.shuffleDeckAsiaAustralia, () =>
                this.updateDeck(ENCOUNTERS.ASIAAUSTRALIASHUFFLE, [1, 2, 3, 4, 5, 6, 7, 8])
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.ASIAAUSTRALIASHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              <button className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'} id="AsiaAustralia"></button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div className="encounter-card-front" id={`AsiaAustraliaFront${this.state.asiaaustraliaShuffle}`}>
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.discardDeckAsiaAustralia.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.discardDeckAsiaAustralia.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAsiaAustralia.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.GENERALSHUFFLE, this.shuffleDeckGeneral, () =>
                this.updateDeck(ENCOUNTERS.GENERALSHUFFLE, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.GENERALSHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={<button className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'} id="General"></button>}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div className="encounter-card-front" id={`GeneralFront${this.state.generalShuffle}`}>
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.discardDeckGeneral.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.discardDeckGeneral.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckGeneral.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`GeneralFront${this.discardDeckGeneral[this.discardDeckGeneral.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.OTHERWORLDSHUFFLE, this.shuffleDeckOtherWorld, () =>
                this.updateDeck(
                  ENCOUNTERS.OTHERWORLDSHUFFLE,
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
                )
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.OTHERWORLDSHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              <button className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'} id="OtherWorld"></button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div className="encounter-card-front" id={`OtherWorldFront${this.state.otherworldShuffle}`}>
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.discardDeckOtherWorld.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.discardDeckOtherWorld.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckOtherWorld.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`OtherWorldFront${this.discardDeckOtherWorld[this.discardDeckOtherWorld.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={this.props.expeditionReverseShuffle !== undefined ? this.props.handleExpeditionShuffle : this.props.defeat}
            onClose={this.props.handleExpeditionDiscard}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              <button
                className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'}
                id={`Expedition${
                  this.props.expeditionReverseShuffle !== undefined ? this.props.expeditionReverseShuffle : 'Defeat'
                }`}
              ></button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div
                  className="encounter-card-front"
                  id={`Expedition${this.props.expeditionPreviousReverse}Front${this.props.expeditionShuffle}`}
                >
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.props.discardDeckExpedition.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.props.discardDeckExpedition.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 1]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 1]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 2]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 2]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 3]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 3]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 4]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 4]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 5]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 5]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 6]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 6]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 7]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 7]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 8]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 8]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 9]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 9]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 10]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 10]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 11]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 11]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 12]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 12]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 13]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 13]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 14]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 14]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 15]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 15]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 16]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 16]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 17]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 17]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 18]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 18]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 19]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 19]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 20]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 20]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 21]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 21]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 22]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 22]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 23]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 23]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 24]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 24]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 25]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 25]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 26]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 26]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 27]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 27]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 28]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 28]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 29]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 29]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 30]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 30]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 31]
                        }Front${this.props.discardDeckExpedition[this.props.discardDeckExpedition.length - 31]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.props.discardDeckExpedition.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`Expedition${
                          this.props.discardDeckReverseExpedition[this.props.discardDeckReverseExpedition.length - 32]
                        }Front${this.props.discardDeckExpedition[this.discardDeckExpedition.length - 32]}`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        <div className="encounter-card-discard-div">
          <Popup
            onOpen={() =>
              this.handleEncounterShuffle(ENCOUNTERS.ANCIENTRESEARCHSHUFFLE, this.shuffleDeckAncientResearch, () =>
                this.updateDeck(ENCOUNTERS.ANCIENTRESEARCHSHUFFLE, [1, 2, 3, 4, 5, 6, 7, 8])
              )
            }
            onClose={() => this.handleEncounterDiscard(ENCOUNTERS.ANCIENTRESEARCHSHUFFLE)}
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={
              <button
                className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'}
                id={`${this.props.ancient}Research`}
              ></button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup">
                <div
                  className="encounter-card-front"
                  id={`${this.props.ancient}ResearchFront${this.state.ancientresearchShuffle}`}
                >
                  <button className="encounter-close-button" onClick={() => close()}>
                    X
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <Popup
            contentStyle={{ background: 'transparent', border: 'transparent' }}
            trigger={this.discardDeckAncientResearch.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
            modal
            nested
          >
            {(close) => (
              <div className="outer-popup-discard">
                <button className="encounter-discard-close-button" onClick={() => close()}>
                  X
                </button>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                  {this.discardDeckAncientResearch.length >= 1 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 1]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 2 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 2]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 3 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 3]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 4 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 4]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 5 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 5]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 6 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 6]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 7 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 7]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 8 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 8]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 9 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 9]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 10 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 10]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 11 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 11]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 12 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 12]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 13 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 13]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 14 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 14]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 15 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 15]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 16 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 16]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 17 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 17]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 18 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 18]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 19 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 19]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 20 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 20]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 21 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 21]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 22 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 22]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 23 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 23]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 24 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 24]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 25 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 25]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 26 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 26]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 27 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 27]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 28 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 28]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 29 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 29]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 30 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 30]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 31 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 31]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                  {this.discardDeckAncientResearch.length >= 32 ? (
                    <SwiperSlide>
                      <div
                        className="encounter-card-discard"
                        id={`${this.props.ancient}ResearchFront${
                          this.discardDeckAncientResearch[this.discardDeckAncientResearch.length - 32]
                        }`}
                      ></div>
                    </SwiperSlide>
                  ) : null}
                </Swiper>
              </div>
            )}
          </Popup>
        </div>
        {this.props.ancient === 'Cthulhu' || this.props.ancient === 'YogSothoth' ? (
          <div className="encounter-card-discard-div">
            <Popup
              onOpen={() =>
                this.handleEncounterShuffle(ENCOUNTERS.ANCIENTSPECIALSHUFFLE, this.shuffleDeckAncientSpecial, () =>
                  this.updateDeck(ENCOUNTERS.ANCIENTSPECIALSHUFFLE, [1, 2, 3, 4, 5, 6])
                )
              }
              onClose={() => this.handleEncounterDiscard(ENCOUNTERS.ANCIENTSPECIALSHUFFLE)}
              contentStyle={{ background: 'transparent', border: 'transparent' }}
              trigger={
                <button
                  className={this.state.isLoadDone ? 'encounter-card' : 'encounter-card-stamp'}
                  id={`${this.props.ancient}Special`}
                ></button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="outer-popup">
                  <div
                    className="encounter-card-front"
                    id={`${this.props.ancient}SpecialFront${this.state.ancientspecialShuffle}`}
                  >
                    <button className="encounter-close-button" onClick={() => close()}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <Popup
              contentStyle={{ background: 'transparent', border: 'transparent' }}
              trigger={this.discardDeckAncientSpecial.length !== 0 ? <button className="discard-button">ODRZUCONE</button> : null}
              modal
              nested
            >
              {(close) => (
                <div className="outer-popup-discard">
                  <button className="encounter-discard-close-button" onClick={() => close()}>
                    X
                  </button>
                  <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {this.discardDeckAncientSpecial.length >= 1 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 1]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 2 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 2]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 3 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 3]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 4 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 4]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 5 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 5]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 6 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 6]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 7 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 7]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 8 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 8]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 9 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 9]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 10 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 10]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 11 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 11]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 12 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 12]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 13 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 13]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 14 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 14]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 15 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 15]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 16 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 16]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 17 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 17]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 18 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 18]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 19 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 19]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 20 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 20]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 21 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 21]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 22 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 22]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 23 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 23]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 24 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 24]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 25 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 25]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 26 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 26]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 27 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 27]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 28 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 28]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 29 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 29]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 30 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 30]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 31 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 31]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                    {this.discardDeckAncientSpecial.length >= 32 ? (
                      <SwiperSlide>
                        <div
                          className="encounter-card-discard"
                          id={`${this.props.ancient}SpecialFront${
                            this.discardDeckAncientSpecial[this.discardDeckAncientSpecial.length - 32]
                          }`}
                        ></div>
                      </SwiperSlide>
                    ) : null}
                  </Swiper>
                </div>
              )}
            </Popup>
          </div>
        ) : null}
      </div>
    );
  }
}

export default EncountersCards;
