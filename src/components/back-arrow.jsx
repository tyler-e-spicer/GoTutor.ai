import React, { useState } from 'react';

function BackArrow ({ onBackClick }) {

    const handleClick = () => {
        onBackClick();
      };

    return (
        <button onClick={handleClick} className='time-travel' id='back'>
            {'-'}
        </button>
    )


}

export default BackArrow;
