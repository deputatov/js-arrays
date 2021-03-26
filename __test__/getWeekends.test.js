import { getWeekends } from '../src/getWeekends';

describe('get weekends', () => {
  test('should word', () => {
    expect(getWeekends()).toEqual(['saturday', 'sunday']);
    expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
    expect(getWeekends('short')).toEqual(['sat', 'sun']);
  });
});
