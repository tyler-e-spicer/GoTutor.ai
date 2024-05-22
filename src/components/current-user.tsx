import React from "react";

interface UserComponentProps {
  whiteCaptures: number;
  blackCaptures: number;
  currentMove: number;
}

function UserComponent({
  whiteCaptures,
  blackCaptures,
  currentMove,
}: UserComponentProps): JSX.Element {
  return (
    <div className="user-component">
      User: tyler.e.spicer723 <br />
      Game ID: 41 <br />
      Black Captures: {blackCaptures} <br />
      White Captures: {whiteCaptures} <br />
      Playing: {"⚫"} <br />
    </div>
  );
}

export default UserComponent;
