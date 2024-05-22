import React, { useState, useEffect } from 'react';
import chBg1 from '../assets/ch-bg.jpg';
import chBg2 from '../assets/ch-bg2.jpg';
import chBg3 from '../assets/ch-bg3.jpg';
import chBg4 from '../assets/ch-bg4.jpg';
import chBg5 from '../assets/ch-bg5.jpg';
import chBg6 from '../assets/ch-bg6.jpg';

function StyleBGButton() {
    const [styleClicks, setStyleClicks] = useState(0);
    const [background, setBackground] = useState(chBg1);

    
    useEffect(() => {
        // ensures there is a background assigned at mounting. Covers side effects of style-cycle. 
        const backgroundElement = document.querySelector('.app-container');
        const goBoard = document.querySelector('.bg-image');
        backgroundElement.style.backgroundImage = `url('${background}')`;
        goBoard.style.backgroundImage = `url(../../assets/goBoard.png)`;
      }, [background]);


    const onStyleClick = () => {
        const bgs = [
            chBg1,
            chBg2,
            chBg3,
            chBg4,
            chBg5,
            chBg6,
        ];

        const backgroundElement = document.querySelector('.app-container');
        const clicks = styleClicks;
        const goBoard = document.querySelector('.bg-image');

        if (clicks < bgs.length) {
            setStyleClicks(clicks + 1);
            const newBackground = bgs[clicks];
            setBackground(newBackground);
            backgroundElement.style.backgroundImage = `url('${newBackground}')`;
            goBoard.style.backgroundImage = `url(../../assets/goBoard.png)`;
        } else {
            setStyleClicks(0);
            const newBackground = bgs[0];
            setBackground(newBackground);
            backgroundElement.style.backgroundImage = `url('${newBackground}')`;
            goBoard.style.backgroundImage = `url(../../assets/goBoard.png)`;
        }
        console.log(background)
        console.log(styleClicks)
    }

    return (
        <button className='style-button' onClick={onStyleClick}>
            bg
        </button>
    )
}

export default StyleBGButton;
