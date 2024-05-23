import React from "react";
import { StarPoint } from "../../types";
import { backInTime } from "../utils/time-travel";

type BackArrowProps = {
  currentMove: number;
  pastMoves: StarPoint[][];
  setHistory: React.Dispatch<React.SetStateAction<StarPoint[]>>;
  setCurrentMove: React.Dispatch<React.SetStateAction<number>>;
};

function BackArrow({
  currentMove,
  pastMoves,
  setHistory,
  setCurrentMove,
}: BackArrowProps): JSX.Element {
  return (
    <button
      onClick={() =>
        backInTime(currentMove, pastMoves, setHistory, setCurrentMove)
      }
      className="time-travel"
      id="back"
    >
      {"-"}
    </button>
  );
}

export default BackArrow;
