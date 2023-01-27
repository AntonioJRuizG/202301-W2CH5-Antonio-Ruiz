const colums = 3;
const rows = 3;
const board = [];

export function setBoard(board, colums, rows) {
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < colums; c++) {
      row.push(0);
    }

    board.push(row);
  }

  return board;
}

setBoard(board, colums, rows);

board[2][2] = 1; // Board[row][colum]

console.table(board);

function countContiguousCells(board) {
  let cellsCounter = 0;

  const rows = board.length;
  const cols = board[0].length;
  const expandedBoard = Array.from(board);
  for (let i = 0; i < rows; i++) {
    expandedBoard[i].push(2);
    expandedBoard[i].unshift(2);
  }

  const expandedRow = [];
  for (let i = 0; i < cols + 2; i++) {
    expandedRow.push(2);
  }

  expandedBoard.push(expandedRow);
  expandedBoard.unshift(expandedRow);

  const cellsMatrix = expandedBoard.map((arr) => arr.slice());

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (expandedBoard[i - 1][j - 1] === 1) cellsCounter++;

      if (expandedBoard[i - 1][j] === 1) cellsCounter++;
      if (expandedBoard[i - 1][j + 1] === 1) cellsCounter++;
      if (expandedBoard[i][j - 1] === 1) cellsCounter++;

      if (expandedBoard[i][j + 1] === 1) cellsCounter++;
      if (expandedBoard[i + 1][j - 1] === 1) cellsCounter++;
      if (expandedBoard[i + 1][j] === 1) cellsCounter++;
      if (expandedBoard[i + 1][j + 1] === 1) cellsCounter++;

      cellsMatrix[i][j] = cellsCounter;
      cellsCounter = 0;
    }
  }

  console.table("matrix contador celdas", cellsMatrix);
  return cellsMatrix;
}

console.table(countContiguousCells(board));
