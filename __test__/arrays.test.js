import {
  swap,
  get,
  addPrefix,
  reverse,
  calculateSum,
  calculateAverage,
  getSameParity,
  getTotalAmount,
  getIntersectionOfSortedArrays,
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

describe('calculate average', () => {
  test('calculate', () => {
    const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
    const actual1 = calculateAverage(temperatures1); // 38.5
    expect(actual1).toBe(38.5);

    const temperatures2 = [36, 37.4, 39, 41, 36.6];
    const actual2 = calculateAverage(temperatures2); // 38
    expect(actual2).toBe(38);
  });
  test('should be null', () => {
    const temperatures = [];
    const actual3 = calculateAverage(temperatures); // null
    expect(actual3).toBeNull();
  });
});

test('get same parity', () => {
  const result1 = getSameParity([1, 2, 3]);
  expect(result1).toEqual([1, 3]);

  const result2 = getSameParity([1, 2, 8]);
  expect(result2).toEqual([1]);

  const result3 = getSameParity([2, 3, 8]);
  expect(result3).toEqual([2, 8]);

  const result4 = getSameParity([1, 2, -3]);
  expect(result4).toEqual([1, -3]);

  const result5 = getSameParity([-3, 2, 1]);
  expect(result5).toEqual([-3, 1]);

  const result6 = getSameParity([]);
  expect(result6).toEqual([]);
});

test('get total amount', () => {
  const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
  const result1 = getTotalAmount(money1, 'usd'); // 16
  expect(result1).toBe(16);

  const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
  const result2 = getTotalAmount(money2, 'eur'); // 135
  expect(result2).toBe(135);

  const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
  const result3 = getTotalAmount(money3, 'rub'); // 270
  expect(result3).toBe(270);
});

describe('getIntersectionOfSortedArrays', () => {
  it('test 1', () => {
    const actual = getIntersectionOfSortedArrays([], []);
    expect(actual).toEqual([]);
  });

  it('test 2', () => {
    const actual = getIntersectionOfSortedArrays([1], []);
    expect(actual).toEqual([]);
  });

  it('test 3', () => {
    const actual = getIntersectionOfSortedArrays([], [2]);
    expect(actual).toEqual([]);
  });

  it('test 4', () => {
    const actual = getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]);
    expect(actual).toEqual([]);
  });

  it('test 5', () => {
    const actual = getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]);
    expect(actual).toEqual([10, 24]);
  });

  it('test 6', () => {
    const actual = getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21]);
    expect(actual).toEqual([10]);
  });

  it('test 7', () => {
    const actual = getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10]);
    expect(actual).toEqual([10]);
  });
});
