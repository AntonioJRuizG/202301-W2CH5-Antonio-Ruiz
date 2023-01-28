const colums = 3;
const rows = 3;
let currentBoard = [];

export function setBoard(twoDimArray, colums, rows) {
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < colums; c++) {
      row.push(0);
    }

    twoDimArray.push(row);
  }

  return twoDimArray;
}

currentBoard = setBoard(currentBoard, colums, rows);

// Rellenar tabla inicial
/* for (let i = 0; i < currentBoard.length - 1; i++) {
  for (let j = 0; j < currentBoard.length; j++) {
    currentBoard[i][j] = 1;
  }
} */

currentBoard[0][1] = 1;

console.table(currentBoard);

export function createAuxBoard(biDimArray) {
  if (biDimArray.length === 0) return false;
  const rows = biDimArray.length;
  const cols = biDimArray[0].length;
  const auxiliarBoard = biDimArray.map((arr) => arr.slice());
  for (let i = 0; i < rows; i++) {
    auxiliarBoard[i].push(2);
    auxiliarBoard[i].unshift(2);
  }

  const auxiliarRow = [];
  for (let i = 0; i < cols + 2; i++) {
    auxiliarRow.push(2);
  }

  auxiliarBoard.push(auxiliarRow);
  auxiliarBoard.unshift(auxiliarRow);

  return auxiliarBoard;
}

export function countAdjacentCells(biDimArray) {
  let adjecentCellsCounter = 0;
  const auxBoard = createAuxBoard(biDimArray);
  const rows = auxBoard.length - 2;
  const cols = auxBoard[0].length - 2;
  const adjacentTotalCellsMatrix = auxBoard.map((arr) => arr.slice());

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (auxBoard[i - 1][j - 1] === 1) adjecentCellsCounter++;
      if (auxBoard[i - 1][j] === 1) adjecentCellsCounter++;
      if (auxBoard[i - 1][j + 1] === 1) adjecentCellsCounter++;
      if (auxBoard[i][j - 1] === 1) adjecentCellsCounter++;

      if (auxBoard[i][j + 1] === 1) adjecentCellsCounter++;
      if (auxBoard[i + 1][j - 1] === 1) adjecentCellsCounter++;
      if (auxBoard[i + 1][j] === 1) adjecentCellsCounter++;
      if (auxBoard[i + 1][j + 1] === 1) adjecentCellsCounter++;

      adjacentTotalCellsMatrix[i][j] = adjecentCellsCounter;
      adjecentCellsCounter = 0;
    }
  }

  return adjacentTotalCellsMatrix;
}

const adjacentCellsCount = countAdjacentCells(currentBoard);

console.table(adjacentCellsCount);
