import './App.css';
import Dice from "./components/Dice";
import React from "react";
import ReactConfetti from "react-confetti";

function App() {

    const [currentRecord, setCurrentRecord] = React.useState(0)
    const [topRecord, setTopRecord] = React.useState(localStorage.getItem('top'))
    console.log(topRecord)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getArray() {
        let RandomNums = []
        for (let i = 0; i < 10; i++)
            RandomNums[i] = {
                id: i,
                num: getRandomInt(6)+1,
                blocked: false,
            }
        return RandomNums
    }

    function handleClick() {
        setCurrentRecord(prev=>{return ++prev})
        if (!victory())
        setDiceNums(prev=>{
            return prev.map(dice =>  {
                return {
                    ...dice,
                    num: dice.blocked? dice.num : getRandomInt(6)+1
                }
            })
        })
        else {
            setDiceNums(getArray())
            setCurrentRecord(0)
            if (topRecord > currentRecord) {
                localStorage.setItem('top', currentRecord)
                setTopRecord(currentRecord)
            }
            if (topRecord === 0) {
                localStorage.setItem('top', currentRecord)
                setTopRecord(currentRecord)
            }
        }

    }






    function handleDiceClick(event, id) {

        { setDiceNums((prev) =>{
                return prev.map(dice => {
                    return {
                        ...dice,
                        blocked: dice.id === id? !dice.blocked : dice.blocked
                    }
                })
        })}

    }



    const [diceNums, setDiceNums] = React.useState(getArray())
    const myNums = diceNums.map(dice=>{
        return <Dice key = {dice.id} dice={dice} click={handleDiceClick}/>
    })

    function victory() {
        return (diceNums.filter((dice)=> diceNums[0].num === dice.num).length === 10) && (diceNums.filter((dice)=> dice.blocked).length) === 10
    }



    return (
        <div className='app'>
            <div className='game'>
                <div className='dice--container'>
                    {victory() && <ReactConfetti/>}
                    {myNums}
                </div>
                <button className='game--button' onClick={handleClick}>
                    {victory()?'You won!':'Roll'}
                </button>
                <div className='records'>

                    <div className='record--current'>
                        Your current score: {currentRecord}
                    </div>
                    <div className='record--top'>
                        Your top score: {topRecord}
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
