// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }
  return `<dl>${definitions
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`)
    .join('')}</dl>`;
};

export const makeCensored = (sentence, censors) =>
  sentence
    .split(' ')
    .map((word) => {
      if (censors.includes(word)) {
        return '$#%!';
      }
      return word;
    })
    .join(' ');

export const countUniqChars = (text) => new Set(text.split('')).size;

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) =>
  closingSymbols[openingSymbols.indexOf(symbol)];

export const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
