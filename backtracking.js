// 90. Subsets II
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const group = [];

  const backtrack = (i) => {
    if (i === nums.length) {
      res.push([...group]);
      return;
    }
    group.push(nums[i]);
    backtrack(i + 1);
    group.pop();
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    backtrack(i + 1);
  };

  backtrack(0);
  return res;
};

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

// 46. Permutations

var permute = function (nums) {
  const res = [];
  const set = new Set();

  const backtrack = () => {
    if (set.size === nums.length) {
      res.push([...set]);
      return;
    }

    for (let n of nums) {
      if (!set.has(n)) {
        set.add(n);
        backtrack();
        set.delete(n);
      }
    }
  };

  backtrack();
  return res;
};

// 40. Combination Sum II
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  const group = [];
  const backtrack = (i, sum) => {
    if (sum === target) {
      res.push([...group]);
      return;
    }
    if (sum > target || i === candidates.length) {
      return;
    }

    group.push(candidates[i]);
    backtrack(i + 1, sum + candidates[i]);
    group.pop();

    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    backtrack(i + 1, sum);
  };

  backtrack(0, 0);
  return res;
};
