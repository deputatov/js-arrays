/* eslint-disable no-param-reassign */
export const swap = (arr) => {
  if (arr.length < 2) return arr;
  return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};

export const get = (arr, idx, def = null) => {
  if (arr[idx] === undefined) {
    return def;
  }
  return arr[idx];
};

export const addPrefix = (arr, prefix) => arr.map((e) => `${prefix} ${e}`);

export const reverse = (arr) => {
  const lastIndex = arr.length - 1;
  const middleIndex = lastIndex / 2;

  for (let i = 0; i < middleIndex; i += 1) {
    [arr[i], arr[lastIndex - i]] = [arr[lastIndex - i], arr[i]];
  }
};
