// L853. Car Fleet
const carFleet = function (target, position, speed) {
  const cars = [];
  for (let i = 0; i < position.length; i++) {
    cars.push({ p: position[i], s: speed[i] });
  }
  cars.sort((a, b) => b.p - a.p);

  const stack = [cars[0]];
  for (let i = 1; i < cars.length; i++) {
    const currentCar = cars[i];
    const lastStackElem = stack[stack.length - 1];
    const timeForLSE = (target - lastStackElem.p) / lastStackElem.s;

    const timeForCC = (target - currentCar.p) / currentCar.s;

    if (timeForLSE >= timeForCC) {
      continue;
    }

    stack.push(currentCar);
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

// //L739. Daily Temperatures

// const dailyTemperatures = function (temperatures) {
//   const stack = [];
//   const output = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     const curr = temperatures[i];

//     while (stack.length && curr > stack[stack.length - 1].elem) {
//       const le = stack.pop();
//       output[le.i] = i - le.i;
//     }

//     stack.push({ elem: curr, i });
//   }

//   stack.forEach(({ i }) => {
//     output[i] = 0;
//   });

//   return output;
// };

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// // L22. Generate Parentheses
// // Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// const generateParenthesis = function (n) {
//   const output = [];
//   const backtrack = (str, left, right) => {
//     if (str.length === 2 * n) {
//       output.push(str);
//       return;
//     }

//     if (left < n) {
//       backtrack(str + "(", left + 1, right);
//     }

//     if (right < left) {
//       backtrack(str + ")", left, right + 1);
//     }
//   };
//   backtrack("", 0, 0);
//   return output;
// };

// console.log(generateParenthesis(2));
