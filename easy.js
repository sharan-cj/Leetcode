var plusOne = function (digits) {
  let i = digits.length - 1;

  let carry = 1;
  while (i >= 0) {
    const digit = digits[i] + carry;
    if (digit >= 10) {
      digits[i] = 0;
      i--;
      carry = Math.floor(digit / 10);
    } else {
      digits[i] = digit;
      carry = 0;
      break;
    }
  }
  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};

console.log(plusOne([9]));
// var plusOne = function (digits) {
//   let sum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i] * 10 ** (digits.length - 1 - i);
//   }

//   sum++;

//   const output = [];

//   while (sum > 0) {
//     const digit = sum % 10;
//     output.push(digit);
//     sum = Math.floor(sum / 10);
//   }

//   return output.reverse();
// };

// console.log(plusOne([4, 3, 2, 1]));

// // 70. Climbing Stairs

// var climbStairs = function (n) {
//   const map = new Map();
//   const recursion = (num) => {
//     if (map.has(num)) {
//       return map.get(num);
//     }
//     if (num <= 2) {
//       return num;
//     }
//     const k = recursion(num - 1) + recursion(num - 2);
//     map.set(num, k);
//     return k;
//   };

//   return recursion(n);
// };

// console.log(climbStairs(44));

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
