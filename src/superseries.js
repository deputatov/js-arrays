/* eslint-disable import/prefer-default-export */

export const getSuperSeriesWinner = (scores) => {
  const result = scores.reduce((acc, [can, ussr]) => {
    const res = Math.sign(can - ussr);
    return acc + res;
  }, 0);
  if (result > 0) {
    return 'canada';
  }
  if (result < 0) {
    return 'ussr';
  }
  return null;
};
