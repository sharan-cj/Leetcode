// 76. Minimum Window Substring
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    const count = tMap.get(t[i]) ?? 0;
    tMap.set(t[i], count + 1);
  }

  let left = 0;
  let subString = "";
  let matching = 0;
  const reqMatch = tMap.size;
  for (let right = 0; right < s.length; right++) {
    const curr = s[right];

    const sMapCount = (sMap.get(curr) ?? 0) + 1;
    sMap.set(curr, sMapCount);

    const tMapCount = tMap.get(curr);

    if (tMapCount && sMapCount === tMapCount) {
      matching++;
    }
    while (matching === reqMatch) {
      const str = s.slice(left, right + 1);
      if (!subString || str.length < subString.length) {
        subString = str;
      }

      const curr = s[left];
      const sMapCount = sMap.get(curr) - 1;
      const tMapCount = tMap.get(curr);
      sMap.set(curr, sMapCount);
      if (tMapCount && tMapCount > sMapCount) {
        matching--;
      }
      left++;
    }
  }

  return subString;
};

console.log(minWindow("aa", "aa"));

// // 567. Permutation in String

// var checkInclusion = function (s1, s2) {
//   if (s1.length > s2.length) return false;

//   const s1Map = new Array(26).fill(0);
//   const s2Map = new Array(26).fill(0);
//   let matching = 0;

//   const charIndexStart = "a".charCodeAt(0);
//   for (let i = 0; i < s1.length; i++) {
//     const s1MapIndex = s1.charCodeAt(i) - charIndexStart;
//     const s2MapIndex = s2.charCodeAt(i) - charIndexStart;
//     s1Map[s1MapIndex] = s1Map[s1MapIndex] + 1;
//     s2Map[s2MapIndex] = s2Map[s2MapIndex] + 1;
//   }

//   for (let i = 0; i < 26; i++) {
//     if (s1Map[i] === s2Map[i]) {
//       matching++;
//     }
//   }

//   let left = 0;
//   for (let i = s1.length; i < s2.length; i++) {
//     if (matching === 26) return true;
//     const mapIndex = s2.charCodeAt(i) - charIndexStart;
//     s2Map[mapIndex] += 1;
//     if (s1Map[mapIndex] === s2Map[mapIndex]) {
//       matching++;
//     } else if (s1Map[mapIndex] + 1 === s2Map[mapIndex]) {
//       matching--;
//     }

//     const leftMapIndex = s2.charCodeAt(left) - charIndexStart;
//     s2Map[leftMapIndex] -= 1;

//     if (s1Map[leftMapIndex] === s2Map[leftMapIndex]) {
//       matching++;
//     } else if (s1Map[leftMapIndex] - 1 === s2Map[leftMapIndex]) {
//       matching--;
//     }

//     left++;
//   }

//   return matching === 26;
// };

// console.log(checkInclusion("ao", "eidbaooo"));

// // 424. Longest Repeating Character Replacement
// var characterReplacement = function (s, k) {
//   let left = 0;
//   const obj = {};
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     const window = i - left + 1;
//     const curr = s[i];

//     obj[curr] = (obj[curr] ?? 0) + 1;
//     const maxFreq = Math.max(...Object.values(obj));

//     if (window - maxFreq <= k) {
//       max = Math.max(max, window);
//     } else {
//       obj[s[left]] = obj[s[left]] - 1;
//       left++;
//     }
//   }

//   return max;
// };

// console.log(characterReplacement("AABABBA", 1));

// // 3. Longest Substring Without Repeating Characters
// var lengthOfLongestSubstring = function (s) {
//   if (s === "") return 0;
//   let ssCharIndex = 0;
//   let maxLen = 0;
//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];
//     if (obj[curr] >= ssCharIndex) {
//       ssCharIndex = obj[curr] + 1;
//     }
//     maxLen = Math.max(maxLen, i - ssCharIndex + 1);
//     obj[curr] = i;
//   }

//   return maxLen;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));

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
