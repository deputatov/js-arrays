import {
  buildDefinitionList,
  makeCensored,
  countUniqChars,
  isBracketStructureBalanced,
} from '../src/strings';

it('StringsTest', () => {
  const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];

  const actual1 = buildDefinitionList(definitions1);
  const expected1 =
    '<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>';
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

describe('is bracket structure balanced', () => {
  test('should be balanced', () => {
    const str = '()';
    expect(isBracketStructureBalanced(str)).toBe(true);

    const str2 = '[()]';
    expect(isBracketStructureBalanced(str2)).toBe(true);

    const str3 = '({}[])';
    expect(isBracketStructureBalanced(str3)).toBe(true);

    const str4 = '(<><<{[()]}>>)';
    expect(isBracketStructureBalanced(str4)).toBe(true);

    const str5 = '';
    expect(isBracketStructureBalanced(str5)).toBe(true);
  });

  test('should not be balanced', () => {
    const str1 = '((';
    expect(isBracketStructureBalanced(str1)).toBe(false);

    const str2 = '[[()]';
    expect(isBracketStructureBalanced(str2)).toBe(false);

    const str3 = '({}}[]';
    expect(isBracketStructureBalanced(str3)).toBe(false);

    const str4 = '(<><<{[()]}>>>)';
    expect(isBracketStructureBalanced(str4)).toBe(false);

    const str5 = '}';
    expect(isBracketStructureBalanced(str5)).toBe(false);

    const str6 = '([)]';
    expect(isBracketStructureBalanced(str6)).toBe(false);

    const str7 = '([))';
    expect(isBracketStructureBalanced(str7)).toBe(false);
  });
});
