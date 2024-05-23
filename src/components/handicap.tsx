import React from "react";

// this element was working but now seems tied to the passCount in state
// This button should invoke the hc function in the parent and place handicapstones on the board
// boardstate/history should be updated accordingly

interface HandicapProps {
  onHandicapClick: () => void;
}

function Handicap({ onHandicapClick }: HandicapProps): JSX.Element {

  return (
    <button className="handicap-button" onClick={() => onHandicapClick()}>
      h+
    </button>
  );
}

export default Handicap;
