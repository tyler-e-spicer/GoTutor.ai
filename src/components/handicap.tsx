import React from "react";

// this element was working but now seems tied to the passCount in state
// This button should invoke the hc function in the parent and place handicapstones on the board
// boardstate/history should be updated accordingly

interface HandicapProps {
  onHandicapClick: () => void;
}

function Handicap({ onHandicapClick }: HandicapProps): JSX.Element {
  const handicapAction = () => {
    console.log('In the handicap action function');
    onHandicapClick();
  };

  return (
    <button className="handicap-button" onClick={() => handicapAction()}>
      h+
    </button>
  );
}

export default Handicap;
