import { StarPoint } from "../../types";

// can we make the param types dryer with overloading??

export function backInTime(
  currentMove: number,
  pastMoves: any[],
  setHistory: (value: StarPoint[]) => void,
  setCurrentMove: (value: number) => void
): void {
  console.log("invoking time travel");
  const pastMovesRef = [...pastMoves];
  console.log("pastMovesRef: ", pastMovesRef);
  const turnNum = currentMove;
  console.log("turnNum ", turnNum);

  if (
    !pastMovesRef ||
    pastMovesRef.length === 0 ||
    turnNum <= 0 ||
    turnNum > pastMovesRef.length
  ) {
    return;
  }

  const newHistory = pastMovesRef[turnNum - 1];
  console.log("newHistory ", newHistory);
  setHistory(newHistory);
  setCurrentMove(currentMove - 1);
  console.log("history ", history);
}

export function forwardInTime(
  currentMove: number,
  pastMoves: any[],
  setHistory: (value: StarPoint[]) => void,
  setCurrentMove: (value: number) => void
): void {
  console.log("invoking time travel");
  const pastMovesRef = [...pastMoves];
  console.log("pastMovesRef: ", pastMovesRef);
  const turnNum = currentMove;
  console.log("turnNum ", turnNum);

  if (
    !pastMovesRef ||
    pastMovesRef.length === 0 ||
    turnNum < 0 ||
    turnNum >= pastMovesRef.length - 1
  ) {
    return;
  }

  const newHistory = pastMovesRef[turnNum + 1];
  console.log("newHistory ", newHistory);
  setHistory(newHistory);
  setCurrentMove(currentMove + 1);
  console.log("history ", history);
}
