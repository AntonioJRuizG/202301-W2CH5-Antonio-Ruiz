const colums = 70;
const rows = 60;
let currentBoard = [];

export function setBoard(colums, rows) {
  const twoDimArray = Array.from(Array(rows), () => new Array(colums).fill(0));
  return twoDimArray;
}

const boardDisplay = setBoard(colums, rows);
function setBoardScreen(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      const cell = document.createElement("div");
      cell.id = i.toString() + "-" + j.toString();
      cell.classList.add("cell");
      cell.addEventListener("click", liveCell);
      document.querySelector(".board").append(cell);
    }
  }
}

currentBoard = setBoard(colums, rows);

for (let i = 5; i < currentBoard.length; i++) {
  for (let j = 0; j < currentBoard.length - 3; j++) {
    currentBoard[i][j] = 1;
  }
}

currentBoard[0][0] = 1;
currentBoard[3][0] = 0;

function liveCell() {
  let position = this.id;
  position = position.split("-");
  const r = position[0];
  const c = position[1];
  if (currentBoard[r][c] === 0) {
    currentBoard[r][c] = 1;
    document.getElementById(r + "-" + c).classList.add("aliveCell");
    console.table(currentBoard);
    return;
  }

  currentBoard[r][c] = 0;
  document.getElementById(r + "-" + c).classList.remove("aliveCell");
  console.table(currentBoard);
}

setBoardScreen(boardDisplay);

export function createAuxBoard(biDimArray) {
  if (biDimArray.length === 0) return false;
  const rows = biDimArray.length;
  const cols = biDimArray[0].length;
  const auxiliarBoard = biDimArray.map((arr) => arr.slice());
  for (let i = 0; i < rows; i++) {
    auxiliarBoard[i].push("*");
    auxiliarBoard[i].unshift("*");
  }

  const auxiliarRow = [];
  for (let i = 0; i < cols + 2; i++) {
    auxiliarRow.push("*");
  }

  auxiliarBoard.push(auxiliarRow);
  auxiliarBoard.unshift(auxiliarRow);

  return auxiliarBoard;
}

export function revertAuxBoard(biDimArray) {
  if (biDimArray.length === 0) return false;
  const rows = biDimArray.length;

  for (let i = 0; i < rows; i++) {
    biDimArray[i].pop();
    biDimArray[i].shift();
  }

  biDimArray.pop();
  biDimArray.shift();

  return biDimArray;
}

export function countAdjacentCells(biDimArray) {
  let adjecentCellsCounter = 0;
  const auxBoard = createAuxBoard(biDimArray);
  const rows = auxBoard.length - 2;
  const cols = auxBoard[0].length - 2;
  const adjacentTotalCellsMatrix = auxBoard.map((arr) => arr.slice());

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      for (let ii = -1; ii <= 1; ii++) {
        for (let jj = -1; jj <= 1; jj++) {
          // eslint-disable-next-line max-depth
          if (ii === 0 && jj === 0) continue;
          // eslint-disable-next-line max-depth
          if (auxBoard[i - ii][j - jj] === 1) adjecentCellsCounter++;
        }
      }

      adjacentTotalCellsMatrix[i][j] = adjecentCellsCounter;
      adjecentCellsCounter = 0;
    }
  }

  return revertAuxBoard(adjacentTotalCellsMatrix);
}

export function nextBoard(arrWithAdCellCalculated, currentBoard) {
  const resultBoard = Array.from(
    Array(arrWithAdCellCalculated.length),
    () => new Array(arrWithAdCellCalculated[0].length)
  );

  for (let i = 0; i < resultBoard.length; i++) {
    for (let j = 0; j < resultBoard[0].length; j++) {
      if (currentBoard[i][j] === 1) {
        if (
          arrWithAdCellCalculated[i][j] < 2 ||
          arrWithAdCellCalculated[i][j] > 3
        ) {
          resultBoard[i][j] = 0;
          document.getElementById(i + "-" + j).classList.remove("aliveCell");
        }

        if (
          arrWithAdCellCalculated[i][j] === 2 ||
          arrWithAdCellCalculated[i][j] === 3
        ) {
          resultBoard[i][j] = 1;
          document.getElementById(i + "-" + j).classList.add("aliveCell");
        }
      }

      if (currentBoard[i][j] === 0) {
        if (arrWithAdCellCalculated[i][j] === 3) {
          resultBoard[i][j] = 1;
          document.getElementById(i + "-" + j).classList.add("aliveCell");
        } else {
          resultBoard[i][j] = 0;
          document.getElementById(i + "-" + j).classList.remove("aliveCell");
        }
      }
    }
  }

  return resultBoard;
}

export const game = () => {
  const adjacentCellsCount = countAdjacentCells(currentBoard);
  const nextBoardPanel = nextBoard(adjacentCellsCount, currentBoard);
  //console.table(currentBoard);

  currentBoard = nextBoardPanel.map((arr) => arr.slice());
};

// game();
setInterval(() => {
  game();
}, 100);
