// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export default (arr) => {
  const itemsCount = arr.length;
  if (itemsCount === 0) {
    return null;
  }
  let acc = 0;
  for (const elem of arr) {
    acc += elem;
  }
  return acc / itemsCount;
};
