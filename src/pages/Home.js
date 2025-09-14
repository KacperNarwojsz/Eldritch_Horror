import React from 'react';
import eldritch_logo from '../pictures/Main/Eldritch_logo.png';
import { ANCIENTS } from '../constants';
import './AllPages.css';

// DONE:
// Czy da radę wygenerować te 4 przyciski przy pomocy Array.from ?

const Home = ({ chooseAncient }) => {
  const buttonsIds = {
    Azathoth: 'ButtonAzathoth',
    YogSothoth: 'ButtonYog',
    ShubNiggurath: 'ButtonShub',
    Cthulhu: 'ButtonCthulhu',
  };
  const ancientNames = {
    Azathoth: 'Azathoth',
    YogSothoth: 'Yog-Sothoth',
    ShubNiggurath: 'Shub-Niggurath',
    Cthulhu: 'Cthulhu',
  };
  return (
    <div className="home">
      <div>
        <img src={eldritch_logo} className="main-eldritch-logo" alt="eldritch_logo" />
      </div>
      <div>
        <p className="main-title">WYBIERZ PRZEDWIECZNEGO:</p>
      </div>
      <div className="ancients-buttons">
        <ul className="main-buttons-ul">
          {Object.values(ANCIENTS).map((ancient, index) => {
            return (
              <li key={index} className="main-button-li">
                <button className="main-button" id={buttonsIds[ancient]} onClick={() => chooseAncient(ancient)}>
                  {ancientNames[ancient]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
