export const getWeekends = (format = 'long') => {
  const weekends = {
    long: ['saturday', 'sunday'],
    short: ['sat', 'sun'],
  };
  return weekends[format];
};
