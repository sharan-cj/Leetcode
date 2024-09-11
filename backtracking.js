// 78. Subsets

var subsets = function (nums) {
  const res = [];
  const len = nums.length;

  const subset = [];
  const backtrack = (i) => {
    if (i === len) {
      return res.push([...subset]);
    }
    subset.push(nums[i]);
    backtrack(i + 1);
    subset.pop();
    backtrack(i + 1);
  };

  backtrack(0);
  return res;
};

// 39. Combination Sum

var combinationSum = function (candidates, target) {
  const res = [];
  const group = [];

  const backtrack = (i, total) => {
    if (total === target) {
      res.push([...group]);
      return;
    }
    if (total > target || i === candidates.length) {
      return;
    }
    group.push(candidates[i]);
    backtrack(i, total + candidates[i]);
    group.pop();
    backtrack(i + 1, total);
  };
  backtrack(0, 0);
  return res;
};
