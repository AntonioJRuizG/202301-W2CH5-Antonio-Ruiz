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
