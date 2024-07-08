// 70. Climbing Stairs

var climbStairs = function (n) {
  const map = new Map();
  const recursion = (num) => {
    if (map.has(num)) {
      return map.get(num);
    }
    if (num <= 2) {
      return num;
    }
    const k = recursion(num - 1) + recursion(num - 2);
    map.set(num, k);
    return k;
  };

  return recursion(n);
};

console.log(climbStairs(44));

// //27. Remove Element
// var removeElement = function (nums, val) {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       arr.push(nums[i]);
//     }
//   }

//   return arr;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// var removeDuplicates = function (nums) {
//   const set = new Set();
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(nums[i])) {
//       arr.push(nums[i]);
//     }
//     set.add(nums[i]);
//   }
//   return arr;
// };

// console.log(removeDuplicates([1, 1, 2]));
// // L13. Roman to Integer
// const romanToInt = function (s) {
//   const symbolValue = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     let val = symbolValue[char];

//     if (char === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
//       val = -1;
//     }
//     if (char === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
//       val = -10;
//     }
//     if (char === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
//       val = -100;
//     }

//     result += val;
//   }
//   return result;
// };

// console.log(romanToInt("MCMXCIV"));
