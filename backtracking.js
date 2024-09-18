// 51. N-Queens

var solveNQueens = function (n) {
  const nd = new Set();
  const pd = new Set();
  const cols = new Set();
  const res = [];
  const board = [];
  for (let r = 0; r < n; r++) {
    board[r] = [];
    for (let c = 0; c < n; c++) {
      board[r][c] = ".";
    }
  }

  const backtrack = (r) => {
    if (r === n) {
      const sol = [];
      for (let row of board) {
        sol.push(row.join(""));
      }
      res.push(sol);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || pd.has(r + c) || nd.has(r - c)) {
        continue;
      }

      cols.add(c);
      pd.add(r + c);
      nd.add(r - c);
      board[r][c] = "Q";

      backtrack(r + 1);

      cols.delete(c);
      pd.delete(r + c);
      nd.delete(r - c);
      board[r][c] = ".";
    }
  };
  backtrack(0);
  return res;
};

// 17. Letter Combinations of a Phone Number

var letterCombinations = function (digits) {
  if (!digits) return [];
  const numToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  const backtrack = (i, str) => {
    if (str.length === digits.length) {
      res.push(str);
      return;
    }

    const words = numToChar[digits[i]];
    for (let w of words) {
      backtrack(i + 1, str + w);
    }
  };

  backtrack(0, "");
  return res;
};

// 131. Palindrome Partitioning

var partition = function (s) {
  const isPalindrome = (l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };
  const res = [];
  const sub = [];
  const backtrack = (start) => {
    if (start === s.length) {
      res.push([...sub]);
      return;
    }
    for (let end = start; end < s.length; end++) {
      if (isPalindrome(start, end)) {
        sub.push(s.slice(start, end + 1));
        backtrack(end + 1);
        sub.pop();
      }
    }
  };
  backtrack(0);
  return res;
};

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
