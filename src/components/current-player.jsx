import React from 'react';

function CurrentPlayer({ currentMove }) {

    const currentPlayer = currentMove % 2 ? '⚫' : '⚪';

    return (
        <div className='current-player-box'>
            Turn: <br/>
            {currentPlayer}
        </div>
    )

}

export default CurrentPlayer;