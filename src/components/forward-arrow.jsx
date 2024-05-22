import React, { useState } from 'react';

function ForwardArrow ({ onForwardClick }) {

    const handleClick = () => {
        onForwardClick();
      };

    return (
        <button onClick={handleClick} className='time-travel'>
            {'+'}
        </button>
    )


}

export default ForwardArrow;
