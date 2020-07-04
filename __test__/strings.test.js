import { buildDefinitionList, makeCensored } from '../src/strings.js';

it('StringsTest', () => {
  const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];

  const actual1 = buildDefinitionList(definitions1);
  const expected1 = '<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>';
  expect(actual1).toBe(expected1);

  const actual2 = buildDefinitionList([]);
  expect(actual2).toBe('');
});

describe('makeCensored', () => {
  it('test 1', () => {
    const sentence = 'When you play the game of thrones, you win or you die';
    const actual = makeCensored(sentence, ['die']);
    const expected = 'When you play the game of thrones, you win or you $#%!';
    expect(actual).toEqual(expected);
  });

  it('test 2', () => {
    const sentence = 'chicken chicken? chicken! chicken';
    const actual = makeCensored(sentence, ['chicken']);
    const expected = '$#%! chicken? chicken! $#%!';
    expect(actual).toEqual(expected);
  });

  it('test 3', () => {
    const sentence = 'chicken chicken? chicken! ? chicken';
    const actual = makeCensored(sentence, ['?', 'chicken']);
    const expected = '$#%! chicken? chicken! $#%! $#%!';
    expect(actual).toEqual(expected);
  });
});
