export default (arr, idx, defValue = null) => arr[idx] ?? defValue;

export const getCities1 = (arr, idx, defValue = null) => {
  if (arr.defValue < idx || idx < 0) return defValue;
  return arr[idx];
};
