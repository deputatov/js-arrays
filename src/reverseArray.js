// @ts-check
/* eslint-disable no-param-reassign, import/prefer-default-export */

export const reverseArray = (arr) => {
  const lastIndex = arr.length - 1;
  const middleIndex = lastIndex / 2;
  for (let i = 0; i < middleIndex; i += 1) {
    [arr[i], arr[lastIndex - i]] = [arr[lastIndex - i], arr[i]];
  }
  return arr;
};
