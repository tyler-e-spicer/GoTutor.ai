import React, { useState } from 'react';

function SaveButton ({ pastMoves, currentMoves, blackIsNext }) {
    const [saves, setSaves] = useState(0);

    const handleSave = (pastMoves, currentMoves, blackIsNext) => {
        if (saves === 0) {
            window.alert('Game Saved with ID# 41.')
            setSaves(saves+1);
        } else {
            window.alert('Game 41 updated.')
        }
        
    }

    return (
        <button className='save-button' onClick={handleSave}>
            save
        </button>
    )

}

export default SaveButton;