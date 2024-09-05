// 79. Word Search

var exist = function (board, word) {
  const set = new Set();
  const rows = board.length - 1;
  const cols = board[0].length - 1;

  const dfs = (r, c, i) => {
    const rc = `r${r}c${c}`;
    if (i === word.length) {
      return true;
    }

    if (
      r > rows ||
      c > cols ||
      r < 0 ||
      c < 0 ||
      board[r][c] !== word[i] ||
      set.has(rc)
    ) {
      return false;
    }

    set.add(rc);

    const res =
      dfs(r - 1, c, i + 1) ||
      dfs(r + 1, c, i + 1) ||
      dfs(r, c - 1, i + 1) ||
      dfs(r, c + 1, i + 1);
    set.delete(rc);
    return res;
  };

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
};

// 2028. Find Missing Observations
var missingRolls = function (rolls, mean, n) {
  const rollsSum = rolls.reduce((a, c) => a + c);
  const totalSum = mean * (n + rolls.length);
  const missingSum = totalSum - rollsSum;

  if (missingSum < n || missingSum > n * 6) {
    return [];
  }

  let res = new Array(n).fill(1);
  let sum = n;

  for (let i = 0; i < n && sum < missingSum; i++) {
    const increment = Math.min(6 - res[i], missingSum - sum);
    res[i] += increment;
    sum += increment;
  }

  return res;
};
