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

// 3217. Delete Nodes From Linked List Present in Array
var modifiedList = function (nums, head) {
  const set = new Set(nums);
  const dummy = new ListNode();
  let prev = dummy;
  let curr = head;
  while (curr) {
    if (!set.has(curr.val)) {
      prev.next = curr;
      prev = prev.next;
    }
    curr = curr.next;
  }
  prev.next = null;
  return dummy.next;
};

// 725. Split Linked List in Parts
var splitListToParts = function (head, k) {
  let listLen = 0;
  let currNode = head;
  while (currNode) {
    listLen++;
    currNode = currNode.next;
  }

  const partLen = Math.floor(listLen / k);
  const numOfExtras = listLen % k;

  const res = [];
  let node = head;
  for (i = 0; i < k; i++) {
    const dummy = new ListNode();
    let curr = dummy;
    const len = partLen + (i < numOfExtras ? 1 : 0);

    for (let j = 0; j < len && node; j++) {
      curr.next = node;
      node = node.next;
      curr = curr.next;
    }

    curr.next = null;
    res.push(dummy.next);
  }

  return res;
};
