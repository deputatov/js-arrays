import { buildDefinitionList, makeCensored, countUniqChars } from '../src/strings.js';

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

it('countUniqChars', () => {
  const text1 = 'You know nothing Jon Snow';
  const actual1 = countUniqChars(text1);
  expect(actual1).toBe(13);

  const text2 = 'Fear cuts deeper than swords.';
  const actual2 = countUniqChars(text2);
  expect(actual2).toBe(16);

  const text3 = '';
  const actual3 = countUniqChars(text3);
  expect(actual3).toBe(0);

  const text4 = '0';
  const actual4 = countUniqChars(text4);
  expect(actual4).toBe(1);
});
