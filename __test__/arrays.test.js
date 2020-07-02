import {
  swap, get, addPrefix, reverse, calculateSum,
} from '../src/arrays.js';

test('swap', () => {
  expect(swap([])).toEqual([]);
  expect(swap([1])).toEqual([1]);
  expect(swap([1, 2])).toEqual([2, 1]);
  expect(swap(['one', 'two', 'three'])).toEqual(['three', 'two', 'one']);
  expect(swap(['one', 'two', 'three', 'four'])).toEqual([
    'four',
    'two',
    'three',
    'one',
  ]);
  expect(swap(['one', 'two', 'three', 'four', ''])).toEqual([
    '',
    'two',
    'three',
    'four',
    'one',
  ]);
});

test('get', () => {
  const cities = ['moscow', 'london', 'berlin', 'porto', ''];

  const actual1 = get(cities, 0);
  expect(actual1).toBe(cities[0]);

  const actual2 = get(cities, 2, 'default');
  expect(actual2).toBe(cities[2]);

  const actual3 = get(cities, 5, false);
  expect(actual3).toBe(false);

  const actual4 = get(cities, -1, 'oops');
  expect(actual4).toBe('oops');

  const actual5 = get(cities, 5);
  expect(actual5).toBeNull();

  const actual6 = get(cities, 4);
  expect(actual6).toBe('');
});

test('add prefix', () => {
  const names = ['John', 'Mike', 'Karl'];

  const actual1 = addPrefix(names, 'Mr');
  expect(actual1).toEqual(['Mr John', 'Mr Mike', 'Mr Karl']);

  const actual2 = addPrefix([], 'Mr');
  expect(actual2).toEqual([]);
});

test('reverse', () => {
  const names1 = ['john', 'smith', 'karl'];
  reverse(names1);
  expect(names1).toEqual(['karl', 'smith', 'john']);

  const names2 = [];
  reverse(names2);
  expect(names2).toEqual([]);

  const names3 = ['one', 'two'];
  reverse(names3);
  expect(names3).toEqual(['two', 'one']);

  const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
  reverse(names4);
  expect(names4).toEqual(['joe', 'alan', 'karl', 'smith', 'john']);
});

test('calculate sum', () => {
  const coll1 = [8, 9, 21, 19, 18, 22, 7];
  const actual1 = calculateSum(coll1); // 48
  expect(actual1).toBe(48);

  const coll2 = [2, 0, 17, 3, 9, 15, 4];
  const actual2 = calculateSum(coll2); // 27
  expect(actual2).toBe(27);

  const coll = [];
  const actual3 = calculateSum(coll); // null
  expect(actual3).toBeNull();
});
