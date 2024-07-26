var addDigits = function (num) {
  if (num < 10) return num;

  let sum = 0;

  while (num > 0) {
    const rem = num % 10;
    num = Math.floor(num / 10);
    sum += rem;
  }

  return addDigits(sum);
};

console.log(addDigits(0));

// // 168. Excel Sheet Column Title

// var convertToTitle = function (columnNumber) {
//   const arr = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   let num = columnNumber;
//   let output = [];
//   while (num > 0) {
//     num--;
//     const rem = num % 26;
//     output.push(arr[rem]);
//     num = Math.floor(num / 26);
//   }

//   return output.reverse().join("");
// };

// console.log(convertToTitle(701));

// // 169. Majority Element

// var majorityElement = function (nums) {
//   let count = 1;
//   let num = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === num) {
//       count++;
//     } else {
//       count--;
//     }

//     if (count < 0) {
//       num = nums[i];
//       count = 1;
//     }
//   }

//   return num;
// };

// console.log(majorityElement([3, 2, 3]));
// // 136. Single Number

// var singleNumber = function (nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum ^= nums[i];
//   }
//   return sum;
// };

// console.log(singleNumber([4, 1, 2, 1, 2]));

// // 35. Search Insert Position

// var searchInsert = function (nums, target) {
//   let l = 0;
//   let r = nums.length - 1;

//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);

//     if (nums[mid] === target) return mid;
//     if (nums[mid] > target) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }

//   return l;
// };

// console.log(searchInsert([1, 3, 5, 6, 7, 9, 11], 8));

// // 58. Length of Last Word

// var lengthOfLastWord = function (s) {
//   let count = 0;
//   let lastWordLen = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       if (s[i - 1] !== " ") {
//         lastWordLen = count;
//       }
//       count = 0;
//     } else {
//       count++;
//     }
//   }

//   return count || lastWordLen;
// };

// console.log(lengthOfLastWord("   fly me   to   the moons   "));
// // 69. Sqrt(x)

// var mySqrt = function (x) {
//   let l = 1;
//   let r = x;

//   let ans = 0;
//   while (l <= r) {
//     mid = Math.floor((l + r) / 2);
//     if (mid * mid > x) {
//       r = mid - 1;
//     } else {
//       ans = mid;
//       l = mid + 1;
//     }
//   }
//   return ans;
// };

// console.log(mySqrt(4));

// // 67. Add Binary

// var addBinary = function (a, b) {
//   if (b.length > a.length) {
//     return addBinary(b, a);
//   }

//   let carry = 0;
//   let arr = [];

//   let bArr = new Array(a.length - b.length).fill("0").join("");
//   bArr = bArr + b;

//   for (let i = a.length - 1; i >= 0; i--) {
//     const aVal = Number(a[i]);
//     const bVal = Number(bArr[i]);
//     const sum = aVal + bVal + carry;
//     switch (sum) {
//       case 0:
//         carry = 0;
//         arr.push(0);
//         break;
//       case 1:
//         carry = 0;
//         arr.push(1);
//         break;
//       case 2:
//         carry = 1;
//         arr.push(0);
//         break;
//       case 3:
//         carry = 1;
//         arr.push(1);
//         break;

//       default:
//         break;
//     }
//   }
//   if (carry) {
//     arr.push(carry);
//   }

//   return arr.reverse().join("");
// };

// console.log(addBinary("100", "110010"));
// console.log(addBinary("100", "110010"));
// // 27. Remove Element

// var removeElement = function (nums, val) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       // nums[count] = nums[i];
//       count++;
//     }
//   }
//   return count;
// };

// console.log(removeElement([3, 2, 2, 3], 3));

// // 28. Find the Index of the First Occurrence in a String
// var strStr = function (haystack, needle) {
//   let index = -1;
//   for (let i = 0; i < haystack.length; i++) {
//     const curr = haystack[i];

//     if (curr === needle[0]) {
//       let j = 1;
//       let matching = true;
//       while (j < needle.length) {
//         if (haystack[i + j] !== needle[j]) {
//           matching = false;
//           break;
//         }
//         j++;
//       }
//       if (matching) {
//         index = i;
//         break;
//       }
//     }
//   }

//   return index;
// };

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));

// var plusOne = function (digits) {
//   let i = digits.length - 1;

//   let carry = 1;
//   while (i >= 0) {
//     const digit = digits[i] + carry;
//     if (digit >= 10) {
//       digits[i] = 0;
//       i--;
//       carry = Math.floor(digit / 10);
//     } else {
//       digits[i] = digit;
//       carry = 0;
//       break;
//     }
//   }
//   if (carry) {
//     digits.unshift(carry);
//   }

//   return digits;
// };

// console.log(plusOne([9]));
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
