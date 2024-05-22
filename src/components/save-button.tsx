import React, { useState } from "react";

import { StarPoint } from "../../types";

interface SaveButtonProps {
  pastMoves: StarPoint[];
  currentMove: number;
  blackIsNext: boolean;
}

function SaveButton({
  pastMoves,
  currentMove,
  blackIsNext,
}: SaveButtonProps): JSX.Element {
  const [saves, setSaves] = useState(0);

  const handleSave = (): void => {
    if (saves === 0) {
      window.alert("Game Saved with ID# 41.");
      setSaves(saves + 1);
    } else {
      window.alert("Game 41 updated.");
    }
  };

  return (
    <button className="save-button" onClick={handleSave}>
      save
    </button>
  );
}

export default SaveButton;
