import React, { useState } from "react";
import { StarPoint } from "../../types";
import { forwardInTime } from "../utils/time-travel";

type ForwardArrowProps = {
  currentMove: number;
  pastMoves: StarPoint[][];
  setHistory: React.Dispatch<React.SetStateAction<StarPoint[]>>;
  setCurrentMove: React.Dispatch<React.SetStateAction<number>>;
};

function ForwardArrow({
  currentMove,
  pastMoves,
  setHistory,
  setCurrentMove,
}: ForwardArrowProps): JSX.Element {
  return (
    <button
      onClick={() =>
        forwardInTime(currentMove, pastMoves, setHistory, setCurrentMove)
      }
      className="time-travel"
    >
      {"+"}
    </button>
  );
}

export default ForwardArrow;
