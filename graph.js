// 207. Course Schedule
var canFinish = function (numCourses, prerequisites) {
  const pr = new Map();

  for (let c = 0; c < numCourses; c++) {
    pr.set(c, []);
  }
  for (let [c, p] of prerequisites) {
    pr.set(c, [...pr.get(c), p]);
  }

  const visited = new Set();

  const dfs = (cur) => {
    if (visited.has(cur)) return false;
    if (!pr.get(cur).length) return true;
    visited.add(cur);
    for (let n of pr.get(cur)) {
      if (!dfs(n)) {
        return false;
      }
    }
    visited.delete(cur);
    pr.set(cur, []);
    return true;
  };

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) return false;
  }
  return true;
};

// 130. Surrounded Regions
var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== "O") return;
    board[i][j] = "T";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ([0, rows - 1].includes(r) || [0, cols - 1].includes(c)) {
        dfs(r, c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
      if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }
};
// 417. Pacific Atlantic Water Flow

var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  const p = new Set();
  const a = new Set();

  const dfs = (r, c, prevHeight, set) => {
    if (
      r < 0 ||
      r >= rows ||
      c >= cols ||
      c < 0 ||
      set.has(`${r},${c}`) ||
      prevHeight > heights[r][c]
    )
      return;
    set.add(`${r},${c}`);
    dfs(r + 1, c, heights[r][c], set);
    dfs(r - 1, c, heights[r][c], set);
    dfs(r, c - 1, heights[r][c], set);
    dfs(r, c + 1, heights[r][c], set);
  };

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, heights[r][0], p);
    dfs(r, cols - 1, heights[r][cols - 1], a);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, heights[0][c], p);
    dfs(rows - 1, c, heights[rows - 1][c], a);
  }

  const res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = `${r},${c}`;
      if (p.has(i) && a.has(i)) {
        res.push([r, c]);
      }
    }
  }
  return res;
};

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
