import React from 'react';
import pass from '../assets/pass.mp3';

function PassButton ({ passCount, setPassCount, currentMove, setCurrentMove }) {

    console.log('passCount ', passCount)

    const handlePass = () => {
        const audio = new Audio(pass);
        audio.play();

        setCurrentMove(currentMove+1);
        
        if (passCount < 2 && passCount >=0) {
        setPassCount(passCount + 1);
        console.log('passCount ', passCount)
        }
        if (passCount === 1) {
            window.alert(`Game Over! Please save if you would like to review this game in the future.`) 
        }
    }

    return (
        <button className='pass-button' onClick={handlePass}>
            {'pass'}
        </button>
    )

}

export default PassButton;