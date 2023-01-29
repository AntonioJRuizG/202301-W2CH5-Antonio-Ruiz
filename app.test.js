import * as m from "./app";

describe("Given a function that build a bidimensional array", () => {
  describe("When we have an empty array, an heith and a width", () => {
    test("Then if heigth is 3 and width is 3 it should return a 3x3 array.", () => {
      // Arrange
      const a = 3;
      const b = 3;
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      // Act
      const result = m.setBoard(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe("Given a function that count the adjacent items that contains a 1 number", () => {
  describe("When we have a bidimensional array.", () => {
    test("Then if it has no zeros", () => {
      // Arrange
      const array = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expected = [
        [3, 5, 3],
        [5, 8, 5],
        [3, 5, 3],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe("Given a function that expands the dimensions of a bidimensional array", () => {
  describe("When we have an array, an heith and a width", () => {
    test("Then if heigth is 3 and width is 3 it should return a 4x4 array sourranded by *.", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const expected = [
        ["*", "*", "*", "*", "*"],
        ["*", 0, 0, 0, "*"],
        ["*", 0, 0, 0, "*"],
        ["*", 0, 0, 0, "*"],
        ["*", "*", "*", "*", "*"],
      ];
      // Act
      const result = m.createAuxBoard(array);
      // Asert
      expect(result).toEqual(expected);
    });

    test("Then if array is empty it should return false.", () => {
      // Arrange
      const array = [];

      const expected = false;
      // Act
      const result = m.createAuxBoard(array);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe("Given a function that reduces in one the dimensions of a bidimensional array", () => {
  describe("When we have an a two dimensions array", () => {
    test("Then if heigth is 3 and width is 3 it should return a 2x2 array sourranded by twos.", () => {
      // Arrange
      const array = [
        ["*", "*", "*", "*", "*"],
        ["*", 0, 0, 0, "*"],
        ["*", 0, 0, 0, "*"],
        ["*", 0, 0, 0, "*"],
        ["*", "*", "*", "*", "*"],
      ];

      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      // Act
      const result = m.revertAuxBoard(array);
      // Asert
      expect(result).toEqual(expected);
    });

    test("Then if array is empty it should return false.", () => {
      // Arrange
      const array = [];

      const expected = false;
      // Act
      const result = m.revertAuxBoard(array);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe("Given a function that computes the next cells state.", () => {
  describe("When we have a current state of cell and previous analysis of adjacent cells.", () => {
    test("Then if there is no cells and in first index there is a 3, it should return a 1 in first index", () => {
      // Arrange
      const current = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const analysis = [
        [3, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const expected = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      // Act
      const result = m.nextBoard(analysis, current);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});
