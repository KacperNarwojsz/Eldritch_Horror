import React from 'react';
import LvlCharMatt from '../Components/LvlCharMatt';
import char_icon from '../pictures/LvlChar/CharIcon.png'
import lvl_icon from '../pictures/LvlChar/LvlIcon.png'
import './AllPages.css'



const AzathothLvlChar = ({ loadAzathoth, loadHome, level, characters,
                        chooseLvlEasy, chooseLvlNormal, chooseLvlHard, 
                        chooseCharNo1, chooseCharNo2, chooseCharNo3, chooseCharNo4, 
                        chooseCharNo5, chooseCharNo6, chooseCharNo7, chooseCharNo8 }) => {                       

    return (
        <div className='ancientLvlChar' id='AzathothLvlChar'>
                <LvlCharMatt>
                    <div className='topDiv'>
                        <div className='lvlDiv'>
                            <h1 className='lvlCharText'>POZIOM</h1>
                            <div className='lvlBackDiv'>
                                <button className='backLvlCharButton' onClick={loadHome}></button>
                                <img src={lvl_icon} className="lvl_char_icon" alt="lvl_icon" />
                            </div>
                            <div className='lvlButtonsDiv'>
                                <button className={level === 'Easy' ? 'lvlButtonActive' : 'lvlButton'} onClick={chooseLvlEasy}>ŁATWY</button><br></br>
                                <button className={level === 'Normal' ? 'lvlButtonActive' : 'lvlButton'} onClick={chooseLvlNormal}>NORMALNY</button><br></br>
                                <button className={level === 'Hard' ? 'lvlButtonActive' : 'lvlButton'} onClick={chooseLvlHard}>TRUDNY</button>
                                <h1 className='lvlCharText'>LICZBA GRACZY</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bottomDiv'>
                        <div className='charDiv'>
                            <img src={char_icon} className="lvl_char_icon" alt="char_icon" />
                            <div className='charButtonsDiv'>
                                <button className={characters === 1 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo1}>1</button>
                                <button className={characters === 2 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo2}>2</button>
                                <button className={characters === 3 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo3}>3</button>
                                <button className={characters === 4 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo4}>4</button><br></br>
                                <button className={characters === 5 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo5}>5</button>
                                <button className={characters === 6 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo6}>6</button>
                                <button className={characters === 7 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo7}>7</button>
                                <button className={characters === 8 ? 'charButtonActive' : 'charButton'} onClick={chooseCharNo8}>8</button>
                            </div>
                            <button className='startButton' onClick={!characters || !level ? undefined : loadAzathoth}>ROZPOCZNIJ</button>
                        </div>
                    </div>
                </LvlCharMatt>
            </div>      
    )
}
export default AzathothLvlChar;