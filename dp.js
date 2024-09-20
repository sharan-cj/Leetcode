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
