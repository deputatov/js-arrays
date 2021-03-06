import getSameParity from '../src/getSameParity';

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
