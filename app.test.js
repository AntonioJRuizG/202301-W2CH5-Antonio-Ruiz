import * as m from "./app";

describe("Given a function that build a bidimensional array", () => {
  describe("When we have an empty array, an heith and a width", () => {
    test("Then if heigth is 3 and width is 3 it should return a 3x3 array.", () => {
      // Arrange
      const array = [];
      const a = 3;
      const b = 3;
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      // Act
      const result = m.setBoard(array, a, b);
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
        [2, 2, 2, 2, 2],
        [2, 3, 5, 3, 2],
        [2, 5, 8, 5, 2],
        [2, 3, 5, 3, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 1 zero", () => {
      // Arrange
      const array = [
        [0, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 3, 4, 3, 2],
        [2, 4, 7, 5, 2],
        [2, 3, 5, 3, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 2 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 2, 4, 2, 2],
        [2, 3, 6, 4, 2],
        [2, 3, 5, 3, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 3 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 2, 3, 2, 2],
        [2, 3, 5, 3, 2],
        [2, 3, 5, 3, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 4 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 1, 2, 2, 2],
        [2, 3, 4, 3, 2],
        [2, 2, 4, 3, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 5 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 1, 1, 2],
        [2, 2, 4, 2, 2],
        [2, 1, 3, 2, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 6 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 0, 0, 2],
        [2, 2, 3, 2, 2],
        [2, 1, 2, 1, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 7 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 0, 0, 2],
        [2, 1, 2, 2, 2],
        [2, 1, 1, 1, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 8 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 0, 0, 2],
        [2, 0, 1, 1, 2],
        [2, 0, 1, 0, 2],
        [2, 2, 2, 2, 2],
      ];
      // Act
      const result = m.countAdjacentCells(array);
      // Asert
      expect(result).toEqual(expected);
    });
    test("Then if it has 9 zeros", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2],
        [2, 2, 2, 2, 2],
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
    test("Then if heigth is 3 and width is 3 it should return a 3x3 array sourranded by twos.", () => {
      // Arrange
      const array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const expected = [
        [2, 2, 2, 2, 2],
        [2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2],
        [2, 0, 0, 0, 2],
        [2, 2, 2, 2, 2],
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
