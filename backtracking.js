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
