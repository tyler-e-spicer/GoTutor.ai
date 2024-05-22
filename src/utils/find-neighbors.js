export default function findOpponentNeighbors(board, index, currentMove) {
  const opponentNeighbors = [];
  const opponent = currentMove % 2 === 0 ? "⚫" : "⚪";

  if (board[index + 1] && board[index + 1].stone === opponent) {
    opponentNeighbors.push(index + 1);
  }

  if (board[index - 1] && board[index - 1].stone === opponent) {
    opponentNeighbors.push(index - 1);
  }

  if (board[index - 19] && board[index - 19].stone === opponent) {
    opponentNeighbors.push(index - 19);
  }

  if (board[index + 19] && board[index + 19].stone === opponent) {
    opponentNeighbors.push(index + 19);
  }

  return opponentNeighbors;
}
