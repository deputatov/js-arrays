import { expect } from '@jest/globals';
import { getWeekends, getWeekends1, getWeekends2 } from '../src/getWeekends';

describe('get weekends', () => {
  test('should work1', () => {
    expect(getWeekends()).toEqual(['saturday', 'sunday']);
    expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
    expect(getWeekends('short')).toEqual(['sat', 'sun']);
  });
  test('should work2', () => {
    expect(getWeekends1()).toEqual(['saturday', 'sunday']);
    expect(getWeekends1('long')).toEqual(['saturday', 'sunday']);
    expect(getWeekends1('short')).toEqual(['sat', 'sun']);
  });
  test('should work3', () => {
    expect(getWeekends2()).toEqual(['saturday', 'sunday']);
    expect(getWeekends2('long')).toEqual(['saturday', 'sunday']);
    expect(getWeekends2('short')).toEqual(['sat', 'sun']);
  });
});
