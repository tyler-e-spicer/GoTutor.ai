export default function isCaptured(board, currentMove, opponentNeighbors) {
  if (!opponentNeighbors) return;

  const toInspect = [...opponentNeighbors];
  // console.log('toInspect ', toInspect)
  const checked = [];
  const alliedStone = currentMove % 2 === 0 ? "⚫" : "⚪";
  // console.log('alliedStone ', alliedStone)

  while (toInspect.length) {
    const currentIntersection = toInspect.pop();
    console.log("currentIntersection ", currentIntersection);
    // right
    if (
      board[currentIntersection + 1] &&
      board[currentIntersection + 1].stone === null
    ) {
      // console.log(board[currentIntersection + 1].stone)
      console.log("intersection ", board[currentIntersection + 1]);
      console.log("right");
      return false;
    } else if (
      board[currentIntersection + 1] &&
      board[currentIntersection + 1].stone === alliedStone
    ) {
      if (!checked.includes(currentIntersection + 1))
        toInspect.push(currentIntersection + 1);
    }

    if (
      board[currentIntersection - 1] &&
      board[currentIntersection - 1].stone === null
    ) {
      // console.log(board[currentIntersection - 1].stone)
      console.log("intersection ", board[currentIntersection - 1]);
      console.log("left");
      return false;
    } else if (
      board[currentIntersection - 1] &&
      board[currentIntersection - 1].stone === alliedStone
    ) {
      if (!checked.includes(currentIntersection - 1))
        toInspect.push(currentIntersection - 1);
    }

    // console.log(board[currentIntersection + 3].stone)

    if (
      board[currentIntersection + 19] &&
      board[currentIntersection + 19].stone === null
    ) {
      // console.log(board[currentIntersection + 3].stone)
      console.log("intersection ", board[currentIntersection + 19]);
      console.log("bottom");
      return false;
    } else if (
      board[currentIntersection + 19] &&
      board[currentIntersection + 19].stone === alliedStone
    ) {
      if (!checked.includes(currentIntersection + 19))
        toInspect.push(currentIntersection + 19);
    }

    if (
      board[currentIntersection - 19] &&
      board[currentIntersection - 19].stone === null
    ) {
      console.log("intersection ", board[currentIntersection - 19]);
      console.log("top");
      return false;
    } else if (
      board[currentIntersection - 19] &&
      board[currentIntersection - 19].stone === alliedStone
    ) {
      if (!checked.includes(currentIntersection - 19))
        toInspect.push(currentIntersection - 19);
    }

    checked.push(currentIntersection);
  }
  return checked;
}
