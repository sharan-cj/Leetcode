// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  if (s === "") return 0;
  let ssCharIndex = 0;
  let maxLen = 0;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (obj[curr] >= ssCharIndex) {
      ssCharIndex = obj[curr] + 1;
    }
    maxLen = Math.max(maxLen, i - ssCharIndex + 1);
    obj[curr] = i;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// // 121. Best Time to Buy and Sell Stock

// var maxProfit = function (prices) {
//   let maxPro = 0;

//   let prev = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     const curr = prices[i];

//     if (prev > curr) {
//       prev = curr;
//     } else {
//       maxPro = Math.max(maxPro, curr - prev);
//     }
//   }

//   return maxPro;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
