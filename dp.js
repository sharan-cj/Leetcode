// 152. Maximum Product Subarray
var maxProduct = function (nums) {
  let max = 1;
  let min = 1;
  let res = nums[0];
  for (let n of nums) {
    const temp = max;
    max = Math.max(n * max, n * min, n);
    min = Math.min(temp * n, n * min, n);
    res = Math.max(res, max);
  }
  return res;
};

// 322. Coin Change BOTTOM_UP
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const dp = new Array(amount + 1).fill(0);
  for (let i = 1; i <= amount; i++) {
    let res = Infinity;
    for (let c of coins) {
      const diff = i - c;
      if (diff < 0) break;
      res = Math.min(res, dp[diff] + 1);
    }
    dp[i] = res;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

// 322. Coin Change TOP_DOWN
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  const memo = new Map().set(0, 0);
  const helper = (amt) => {
    if (memo.has(amt)) return memo.get(amt);
    let res = Infinity;
    for (let c of coins) {
      const diff = amt - c;
      if (diff < 0) break;
      res = Math.min(res, 1 + helper(diff));
    }
    memo.set(amt, res);
    return res;
  };
  const res = helper(amount);
  return res === Infinity ? -1 : res;
};

// 91. Decode Ways

var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let lastPrev = 1;
  let prev = 1;

  for (let i = 1; i < s.length; i++) {
    const oneDigit = Number(s[i]);
    const twoDigit = Number(s[i - 1] + s[i]);

    let curr = 0;
    if (oneDigit !== 0) {
      curr = prev;
    }
    if (twoDigit <= 26 && twoDigit > 9) {
      curr += lastPrev;
    }
    lastPrev = prev;
    prev = curr;
  }
  return prev;
};

// 647. Palindromic Substrings

var countSubstrings = function (s) {
  let res = 0;
  const checkPalindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      res++;
      l--;
      r++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }
  return res;
};

// 5. Longest Palindromic Substring

var longestPalindrome = (str) => {
  let longest = "";
  const checkPalindrome = (l, r) => {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      const curr = str.slice(l, r + 1);
      if (curr.length > longest.length) {
        longest = curr;
      }
      r++;
      l--;
    }
  };

  for (let i = 0; i < str.length; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }

  return longest;
};

// 213. House Robber II

var rob = function (nums) {
  if (nums.length < 2) {
    return Math.max(nums[0], nums[1] ?? 0);
  }
  const iterate = (start, end) => {
    let lastPrev = 0;
    let prev = 0;
    for (let i = start; i < end; i++) {
      let curr = Math.max(lastPrev + nums[i], prev);
      lastPrev = prev;
      prev = curr;
    }
    return prev;
  };
  const res = Math.max(iterate(1, nums.length), iterate(0, nums.length - 1));
  return res;
};

// 746. Min Cost Climbing Stairs
var minCostClimbingStairs = function (cost) {
  const n = cost.length + 1;
  const dp = new Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0);
  }

  return dp[n - 1];
};

// 198. House Robber
var rob = function (nums) {
  let beforePrev = 0;
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = Math.max(beforePrev + nums[i], prev);
    beforePrev = prev;
    prev = curr;
  }
  return prev;
};
