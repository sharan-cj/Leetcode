// 994. Rotting Oranges

var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const q = [];
  let fresh = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        q.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }
  let time = 0;
  const markRotten = (i, j) => {
    if (i < 0 || i >= rows || j >= cols || j < 0 || grid[i][j] !== 1) return;
    grid[i][j] = 2;
    q.push([i, j]);
    fresh--;
  };
  while (q.length && fresh > 0) {
    const len = q.length;
    for (let index = 0; index < len; index++) {
      const [i, j] = q.shift();
      markRotten(i, j + 1);
      markRotten(i, j - 1);
      markRotten(i + 1, j);
      markRotten(i - 1, j);
    }
    time++;
  }
  return fresh ? -1 : time;
};

// 133. Clone Graph

var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  const dfs = (node) => {
    if (map.has(node)) return map.get(node);
    const newNode = new _Node(node.val);
    map.set(node, newNode);
    for (let n of node.neighbors) {
      newNode.neighbors.push(dfs(n));
    }
    return newNode;
  };
  return dfs(node);
};

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
