import React from 'react';
import { LEVELS } from '../constants';
import '../pages/AllPages.css';

//Przerobić tak samo jak home buttons

const LevelButtonsList = ({ level, setLvl }) => {
  const levelNames = {
    Easy: 'ŁATWY',
    Normal: 'NORMALNY',
    Hard: 'TRUDNY',
  };
  return (
    <ul className="lvl-buttons-ul">
      {Object.values(LEVELS).map((levelValue, index) => {
        return (
          <li key={index} className="lvl-button-li">
            <button className={level === levelValue ? 'lvl-button-active' : 'lvl-button'} onClick={() => setLvl(levelValue)}>
              {levelNames[levelValue]}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default LevelButtonsList;
