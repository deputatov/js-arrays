export const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }
  return `<dl>${definitions.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
};

export const makeCensored = (sentence, censors) => sentence
  .split(' ')
  .map((word) => {
    if (censors.includes(word)) {
      return '$#%!';
    }
    return word;
  })
  .join(' ');

export const countUniqChars = (text) => new Set(text.split('')).size;
