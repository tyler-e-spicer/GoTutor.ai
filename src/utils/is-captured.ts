import { StarPoint } from "../../types";

export default function isCaptured(
  board: StarPoint[],
  currentMove: number,
  opponentNeighbors: number[]
): number[] | false {
  if (!opponentNeighbors) return false;

  const toInspect: number[] = [...opponentNeighbors];
  const checked: number[] = [];
  const alliedStone: string = currentMove % 2 === 0 ? "⚫" : "⚪";

  while (toInspect.length) {
    const currentIntersection = toInspect.pop();
    if (!currentIntersection) return false;

    if (board[currentIntersection + 1] && board[currentIntersection + 1].stone === null) {
      console.log("intersection ", board[currentIntersection + 1]);
      console.log("right");
      return false;
    } else if (board[currentIntersection + 1] && board[currentIntersection + 1].stone === alliedStone) {
      if (!checked.includes(currentIntersection + 1)) toInspect.push(currentIntersection + 1);
    }

    if (board[currentIntersection - 1] && board[currentIntersection - 1].stone === null) {
      console.log("intersection ", board[currentIntersection - 1]);
      console.log("left");
      return false;
    } else if (board[currentIntersection - 1] && board[currentIntersection - 1].stone === alliedStone) {
      if (!checked.includes(currentIntersection - 1)) toInspect.push(currentIntersection - 1);
    }

    if (board[currentIntersection + 19] && board[currentIntersection + 19].stone === null) {
      console.log("intersection ", board[currentIntersection + 19]);
      console.log("bottom");
      return false;
    } else if (board[currentIntersection + 19] && board[currentIntersection + 19].stone === alliedStone) {
      if (!checked.includes(currentIntersection + 19)) toInspect.push(currentIntersection + 19);
    }

    if (board[currentIntersection - 19] && board[currentIntersection - 19].stone === null) {
      console.log("intersection ", board[currentIntersection - 19]);
      console.log("top");
      return false;
    } else if (board[currentIntersection - 19] && board[currentIntersection - 19].stone === alliedStone) {
      if (!checked.includes(currentIntersection - 19)) toInspect.push(currentIntersection - 19);
    }

    checked.push(currentIntersection);
  }

  return checked;
}
