export const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }
  return `<dl>${definitions.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
};
