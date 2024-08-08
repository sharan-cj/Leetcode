/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 226. Invert Binary Tree
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// 104. Maximum Depth of Binary Tree

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// 543. Diameter of Binary Tree
var diameterOfBinaryTree = function (root) {
  let maxDia = 0;

  const findHeight = (node) => {
    if (!node) return 0;

    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);

    const dia = leftHeight + rightHeight;

    maxDia = Math.max(dia, maxDia);

    return 1 + Math.max(leftHeight, rightHeight);
  };

  findHeight(root);
  return maxDia;
};

// 110. Balanced Binary Tree

var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return [true, 0];

    const [leftBalanced, leftHeight] = dfs(node.left);
    const [rightBalanced, rightHeight] = dfs(node.right);

    const height = Math.max(leftHeight, rightHeight);
    const diff = Math.abs(leftHeight - rightHeight);
    return [leftBalanced && rightBalanced && diff <= 1, height + 1];
  };

  const [isBalanced] = dfs(root);
  return isBalanced;
};

// 100. Same Tree
var isSameTree = function (p, q) {
  function dfs(pNode, gNode) {
    if (!pNode || !gNode) {
      return pNode === gNode;
    }
    const leftNodes = dfs(pNode.left, gNode.left);
    const rightNodes = dfs(pNode.right, gNode.right);
    return leftNodes && rightNodes && pNode.val === gNode.val;
  }

  return dfs(p, q);
};

// 572. Subtree of Another Tree
var isSubtree = function (root, subRoot) {
  const dfs = (node, subNode) => {
    if (!node || !subNode) {
      return node === subNode;
    }
    if (node.val !== subNode.val) return false;
    const leftNodes = dfs(node.left, subNode.left);
    const rightNodes = dfs(node.right, subNode.right);
    return leftNodes && rightNodes;
  };

  const search = (main, sub) => {
    if (!main) {
      return false;
    }
    if (dfs(main, sub)) {
      return true;
    }

    if (search(main.left, sub)) {
      return true;
    }

    return search(main.right, sub);
  };

  return search(root, subRoot);
};

// 235. Lowest Common Ancestor of a Binary Search Tree
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
};

// 102. Binary Tree Level Order Traversal
var levelOrder = function (root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const level = [];
    const qLen = queue.length;
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (level.length) {
      result.push(level);
    }
  }

  return result;
};

// 199. Binary Tree Right Side View

var rightSideView = function (root) {
  const q = [root];
  const res = [];

  while (q.length) {
    qLen = q.length;
    let rs = null;
    for (let i = 0; i < qLen; i++) {
      const node = q.shift();
      if (node) {
        q.push(node.left);
        q.push(node.right);
        rs = node.val;
      }
    }
    if (rs !== null) {
      res.push(rs);
    }
  }
  return res;
};

// 1448. Count Good Nodes in Binary Tree
var goodNodes = function (root) {
  let good = 0;
  const dfs = (node, max) => {
    if (!node) return;
    if (node.val >= max) {
      good++;
    }
    dfs(node.left, Math.max(max, node.val));
    dfs(node.right, Math.max(max, node.val));
  };
  dfs(root, -Infinity);
  return good;
};

// 98. Validate Binary Search Tree
var isValidBST = function (root) {
  const dfs = (node, MIN, MAX) => {
    if (!node) return true;
    if (node.val <= MIN || node.val >= MAX) return false;

    return dfs(node.left, MIN, node.val) && dfs(node.right, node.val, MAX);
  };
  return dfs(root, -Infinity, Infinity);
};

// 230. Kth Smallest Element in a BST
var kthSmallest = function (root, k) {
  const stack = [];
  let curr = root;
  let count = 0;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop();
    count++;

    if (count === k) {
      return node.val;
    }
    curr = node.right;
  }
};

// 105. Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  root.left = buildTree(
    preorder.slice(1, index + 1),
    inorder.slice(0, index + 1)
  );
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
};
