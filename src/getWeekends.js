//  @ts-check
/* eslint-disable import/prefer-default-export */
const weekends = ['saturday', 'sunday'];

export const getWeekends = (format = 'long') =>
  format === 'short' ? weekends.map((value) => value.slice(0, 3)) : weekends;

export const getWeekends1 = (format = 'long') => {
  const short = ['sat', 'sun'];
  const long = ['saturday', 'sunday'];
  switch (format) {
    case 'long':
      return long;
    case 'short':
      return short;
    default:
      return long;
  }
};

export const getWeekends2 = (format = 'long') => {
  const weekends1 = {
    short: ['sat', 'sun'],
    long: ['saturday', 'sunday'],
  };
  return weekends1[format] ?? weekends1.long;
};
