import React from "react";

function Handicap({ onHandicapClick }) {

    // let clicks = 0;
    // const starPoints = ['Q16', 'D4', 'Q4', 'D16', 'Q10', 'D10', 'K16', 'K4', 'K10'];

    const handicapAction = () => {
        
    //     if (clicks <= starPoints.length) clicks++;
    //     if (clicks === starPoints.length) {
    //         clicks = 0
    //     };

        onHandicapClick();
    };

    return (
        <button className="handicap-button" onClick={handicapAction}>
            h+
        </button>
    )

}

export default Handicap;