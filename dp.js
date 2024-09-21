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
