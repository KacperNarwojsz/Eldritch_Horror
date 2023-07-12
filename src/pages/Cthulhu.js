import React from "react";
import EncountersCards from "../Components/EncountersCards";
import CthulhuSheet from "../Components/CthulhuSheet";
import './AllPages.css'


const Cthulhu = ({ submitAnswerToMain }) => {
    return (
        <div className='Cthulhu'>
            <CthulhuSheet />
            <EncountersCards />
        </div>
    )
}

export default Cthulhu;