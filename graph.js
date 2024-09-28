// 695. Max Area of Island

var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dfs = (i, j) => {
    let res = 0;
    if (i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] === 1) {
      res++;
      grid[i][j] = 0;
      res += dfs(i + 1, j);
      res += dfs(i - 1, j);
      res += dfs(i, j + 1);
      res += dfs(i, j - 1);
    }
    return res;
  };
  let max = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      max = Math.max(max, dfs(i, j));
    }
  }
  return max;
};

// 200. Number of Islands

var numIslands = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  const dfs = (i, j) => {
    if (i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] === "1") {
      grid[i][j] = "0";
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i + 1, j);
      dfs(i, j - 1);
    }
  };

  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(i, j);
      }
    }
  }

  return res;
};
