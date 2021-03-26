//  @ts-check
/* eslint-disable import/prefer-default-export */
const weekends = ['saturday', 'sunday'];

export const getWeekends = (format = 'long') =>
  format === 'short' ? weekends.map((value) => value.slice(0, 3)) : weekends;
