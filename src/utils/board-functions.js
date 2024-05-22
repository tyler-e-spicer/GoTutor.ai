export default function newBoard() {
    const horizontalAxis = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
    ];
    const verticalAxis = [
      "19",
      "18",
      "17",
      "16",
      "15",
      "14",
      "13",
      "12",
      "11",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
    ];
    const board = [];
  
    for (let i = 0; i < verticalAxis.length; i++) {
      for (let j = 0; j < horizontalAxis.length; j++) {
        board.push({
          name: `${horizontalAxis[j] + verticalAxis[i]}`,
          stone: null,
        });
      }
    }
  
    return board;
  }