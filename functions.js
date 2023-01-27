export const lengthMethod = (arr) => {
  let length = 0;

  while (arr[length] !== undefined) {
    length++;
  }

  return length;
};

export const popMethod = (arr) => arr[lengthMethod(arr) - 1];

export const unshiftMethod = (arr, item) => {
  const resultArr = [];
  resultArr[0] = item;

  for (let i = 0; i < lengthMethod(arr); i++) {
    resultArr[lengthMethod(resultArr)] = arr[i];
  }

  return resultArr;
};

export const shiftMethod = (arr) => arr[0];

export const someMethod = (arr, item) => {
  for (let i = 0; i < lengthMethod(arr); i++) {
    if (arr[i] === item) return true;
  }

  return false;
};

export const everyMethod = (arr, item, condition) => {
  if (condition === '<') {
    for (let i = 0; i < lengthMethod(arr); i++) {
      if (arr[i] < item) return true;
    }
  }

  if (condition === '>') {
    for (let i = 0; i < lengthMethod(arr); i++) {
      if (arr[i] > item) return true;
    }
  }

  return false;
};

export const findMethod = (arr, item, condition) => {
  if (condition === '<') {
    for (let i = 0; i < lengthMethod(arr); i++) {
      if (arr[i] < item) return arr[i];
    }
  }

  if (condition === '>') {
    for (let i = 0; i < lengthMethod(arr); i++) {
      if (arr[i] > item) return arr[i];
    }
  }

  return undefined;
};
