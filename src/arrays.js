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

export const calculateSum = (coll) => {
  if (coll.length === 0) {
    return null;
  }
  return coll.reduce((acc, e) => {
    if (e % 3 === 0) {
      return acc + e;
    }
    return acc;
  }, 0);
};

export const calculateAverage = (coll) => {
  const len = coll.length;
  if (len === 0) {
    return null;
  }
  return coll.reduce((a, b) => a + b) / len;
};

export const getSameParity = (coll) => coll
  .filter((value) => Math.abs(value) % 2 === Math.abs(coll[0]) % 2);

export const getTotalAmount = (coll, cy) => coll
  .filter((e) => e.includes(cy))
  .map((e) => Number(e.slice(cy.length + 1)))
  .reduce((a, b) => a + b);

export const getIntersectionOfSortedArrays = (arr1, arr2) => arr1
  .reduce((acc, v) => (arr2.includes(v) ? [...acc, v] : acc), []);

export const flatten = (arr) => arr
  .reduce((res, v) => (Array.isArray(v) ? [...res, ...v] : [...res, v]), []);
