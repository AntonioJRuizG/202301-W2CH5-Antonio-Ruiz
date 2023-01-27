import * as m from './functions';

describe('Given an array of undetermined length', () => {
  describe('When we have an array', () => {
    test('Then if length is 4, it should return 4.', () => {
      // Arrange
      const a = [1, null, 'hola', 0];
      const expected = 4;
      // Act
      const result = m.lengthMethod(a);
      // Asert
      expect(result).toBe(expected);
    });
  });
});

describe('Given a pop function', () => {
  describe('When we have an array', () => {
    test('Then if last item is 1, it should return 1.', () => {
      // Arrange
      const a = [1, null, 'hola', 1];
      const expected = 1;
      // Act
      const result = m.popMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if last item is 1, it should return 1.', () => {
      // Arrange
      const a = [];
      const expected = undefined;
      // Act
      const result = m.popMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe('Given a unshiftMethod function', () => {
  describe('When we have an array [1, 2]', () => {
    test("Then if item is 'a', it should return ['a', 1, 2].", () => {
      // Arrange
      const a = [1, 2];
      const b = 'a';
      const expected = ['a', 1, 2];
      // Act
      const result = m.unshiftMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [] and last item is 1, it should return [1].', () => {
      // Arrange
      const a = [];
      const b = 1;
      const expected = [1];
      // Act
      const result = m.unshiftMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe('Given a shiftMethod function', () => {
  describe('When we have an array', () => {
    test('Then if array = [1,2], it should return 1.', () => {
      // Arrange
      const a = [1, 2];

      const expected = 1;
      // Act
      const result = m.shiftMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [] it should return undefined.', () => {
      // Arrange
      const a = [];
      const expected = undefined;
      // Act
      const result = m.shiftMethod(a);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe('Given a someMethod function', () => {
  describe('When we have an array and an item', () => {
    test('Then if array = [1,2] and item=3 it should return false.', () => {
      // Arrange
      const a = [1, 2];
      const b = 3;
      const expected = false;
      // Act
      const result = m.someMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [] and item = "a" it should return false.', () => {
      // Arrange
      const a = [];
      const b = 'a';
      const expected = false;
      // Act
      const result = m.someMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = ["a"",3] and item = "a" it should return true.', () => {
      // Arrange
      const a = ['a', 3];
      const b = 'a';
      const expected = true;
      // Act
      const result = m.someMethod(a, b);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe('Given a every Method function', () => {
  describe('When we have an array, a condition and a number', () => {
    test('Then if array = [1,2] number= 3 and condition = < it should return true.', () => {
      // Arrange
      const a = [1, 2];
      const b = 3;
      const c = '<';
      const expected = true;
      // Act
      const result = m.everyMethod(a, b, c);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [1,2] number= 3 and condition = > it should return false.', () => {
      // Arrange
      const a = [1, 2];
      const b = 3;
      const c = '>';
      const expected = false;
      // Act
      const result = m.someMethod(a, b, c);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});

describe('Given a find Method function', () => {
  describe('When we have an array, a condition and a number', () => {
    test('Then if array = [1,2] number= 3 and condition = < it should return 1.', () => {
      // Arrange
      const a = [1, 2];
      const b = 3;
      const c = '<';
      const expected = 1;
      // Act
      const result = m.findMethod(a, b, c);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [1,2,5] number= 4 and condition = > it should return 5.', () => {
      // Arrange
      const a = [1, 2, 5];
      const b = 4;
      const c = '>';
      const expected = 5;
      // Act
      const result = m.findMethod(a, b, c);
      // Asert
      expect(result).toEqual(expected);
    });
    test('Then if array = [1,2,5] number= 6 and condition = > it should return 5.', () => {
      // Arrange
      const a = [1, 2, 5];
      const b = 6;
      const c = '>';
      const expected = undefined;
      // Act
      const result = m.findMethod(a, b, c);
      // Asert
      expect(result).toEqual(expected);
    });
  });
});
