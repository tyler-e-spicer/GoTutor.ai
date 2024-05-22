import React from "react";

interface CurentPlayerProps {
  currentMove: number;
}

function CurrentPlayer({ currentMove }: CurentPlayerProps): JSX.Element {
  const currentPlayer = currentMove % 2 ? "⚫" : "⚪";

  return (
    <div className="current-player-box">
      Turn: <br />
      {currentPlayer}
    </div>
  );
}

export default CurrentPlayer;
