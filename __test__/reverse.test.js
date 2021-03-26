import { reverseArray } from '../src/reverseArray';

test('reverse', () => {
  const names1 = ['john', 'smith', 'karl'];
  reverseArray(names1);
  expect(names1).toEqual(['karl', 'smith', 'john']);

  const names2 = [];
  reverseArray(names2);
  expect(names2).toEqual([]);

  const names3 = ['one', 'two'];
  reverseArray(names3);
  expect(names3).toEqual(['two', 'one']);

  const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
  reverseArray(names4);
  expect(names4).toEqual(['joe', 'alan', 'karl', 'smith', 'john']);
});
