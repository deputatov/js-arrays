export const swap = (arr) => {
  if (arr.length < 2) return arr;
  return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};
