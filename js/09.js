// const radius = [2, 3, 4, 5];
// const area = (radius) => Math.PI * radius * radius;
// const circumference = (radius) => Math.PI * 2 * radius;
// const diameter = (radius) => 2 * radius;

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
// console.log(calculate(radius, area));

// map functions
// const arr = [1, 2, 3];
// const toBinary = (x) => x.toString(2);
// console.log(arr.map(toBinary));

const arr = [1, 2, 3];
const output = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 4);

console.log(output);
// zxxxx  