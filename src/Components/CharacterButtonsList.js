import React from 'react';
import '../pages/AllPages.css';

const CharacterButtonsList = ({ characters, setCharacters }) => {
  return (
    <ul className="char-buttons-ul">
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <React.Fragment key={index}>
            <li className="char-button-li">
              <button
                className={characters === index + 1 ? 'char-button-active' : 'char-button'}
                onClick={() => setCharacters(index + 1)}
              >
                {index + 1}
              </button>
            </li>
            {index === 3 && <br />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default CharacterButtonsList;
