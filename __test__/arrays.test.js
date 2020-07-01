import { swap } from '../src/arrays.js';

test('array', () => {
  expect(swap([])).toEqual([]);
  expect(swap([1])).toEqual([1]);
  expect(swap([1, 2])).toEqual([2, 1]);
  expect(swap(['one', 'two', 'three'])).toEqual(['three', 'two', 'one']);
  expect(swap(['one', 'two', 'three', 'four'])).toEqual(['four', 'two', 'three', 'one']);
  expect(swap(['one', 'two', 'three', 'four', ''])).toEqual(['', 'two', 'three', 'four', 'one']);
});
