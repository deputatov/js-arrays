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
  if (arr.length !== 0) {
    for (let i = 0; i <= Math.trunc((arr.length - 1) / 2); i += 1) {
      const first = arr[i];
      const last = arr[arr.length - 1 - i];
      arr[i] = last;
      arr[arr.length - 1 - i] = first;
    }
  }
  return arr;
};
