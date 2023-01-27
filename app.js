const colums = 3;
const rows = 3;
const board = [];

export function setBoard(board, colums, rows) {
  for (let r = 0; r < colums; r++) {
    const row = [];
    for (let c = 0; c < rows; c++) {
      row.push(0);
    }

    board.push(row);
  }

  return board;
}

setBoard(board, colums, rows);

board[1][1] = 1;

console.table(board);
console.log(board);
