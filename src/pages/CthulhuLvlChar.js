import React from 'react';
import LvlCharMatt from '../Components/LvlCharMatt';
import char_icon from '../pictures/CharIcon.png'
import lvl_icon from '../pictures/LvlIcon.png'
import './AllPages.css'


const CthulhuLvlChar = ({ loadCthulhu, chooseLvlEasy, chooseLvlNormal, chooseLvlHard, 
                        chooseCharNo1, chooseCharNo2, chooseCharNo3, chooseCharNo4, 
                        chooseCharNo5, chooseCharNo6, chooseCharNo7, chooseCharNo8 }) => {

    return (
        <div className='cthulhuLvlChar'>
                <LvlCharMatt>
                    <div className='topDiv'>
                        <div className='lvlDiv'>
                            <h1 className='lvlCharText'>POZIOM</h1>
                            <img src={lvl_icon} className="lvl_char_icon" alt="lvl_icon" />
                            <div className='lvlButtonsDiv'>
                                <button className='lvlButton' onClick={chooseLvlEasy}>ŁATWY</button><br></br>
                                <button className='lvlButton' onClick={chooseLvlNormal}>NORMALNY</button><br></br>
                                <button className='lvlButton' onClick={chooseLvlHard}>TRUDNY</button>
                                <h1 className='lvlCharText'>LICZBA GRACZY</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bottomDiv'>
                        <div className='charDiv'>
                            <img src={char_icon} className="lvl_char_icon" alt="char_icon" />
                            <div className='charButtonsDiv'>
                                <button className='charButton' onClick={chooseCharNo1}>1</button>
                                <button className='charButton' onClick={chooseCharNo2}>2</button>
                                <button className='charButton' onClick={chooseCharNo3}>3</button>
                                <button className='charButton' onClick={chooseCharNo4}>4</button><br></br>
                                <button className='charButton' onClick={chooseCharNo5}>5</button>
                                <button className='charButton' onClick={chooseCharNo6}>6</button>
                                <button className='charButton' onClick={chooseCharNo7}>7</button>
                                <button className='charButton' onClick={chooseCharNo8}>8</button>
                            </div>
                            <button className='startButton' onClick={loadCthulhu}>ROZPOCZNIJ</button>
                        </div>
                    </div>
                </LvlCharMatt>
            </div>      
    )
}
export default CthulhuLvlChar;