const board = [];
const colums = 3;
const rows = 3;
for (let i = 0; i < colums; i++) {
  for (let j = 0; j < rows; j++) {
    board[i][j] = 0;
  }
}

console.table(board);
