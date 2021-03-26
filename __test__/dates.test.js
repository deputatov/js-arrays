import { getWeekends } from '../src/dates';

test('weekends', () => {
  expect(getWeekends()).toEqual(['saturday', 'sunday']);
  expect(getWeekends('short')).toEqual(['sat', 'sun']);
  expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
});
