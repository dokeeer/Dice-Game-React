import React from 'react';
import './Dice.css'


import GetDice from "./GetDice";

const Dice = (props) => {



    const {num, id, blocked} = props.dice
    return (
        <div onClick={
            (event) => props.click(event,id)
        }>
        <button className={`dice ${blocked? 'blocked': 'free'}`}>

            <GetDice num={num}/>
        </button>
        </div>

    );
};

export default Dice;