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
