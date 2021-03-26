// const calculateSum = (arr) => {
//   if (arr.legth === 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 3 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// };

export default (arr) =>
  arr.reduce((sum, el) => (el % 3 === 0 ? sum + el : sum), 0);
