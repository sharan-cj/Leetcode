// 21. Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  const list = new ListNode();
  let tail = list;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return list.next;
};
// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
  let res = head;
  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return res;
};

// 206. Reverse Linked List
var reverseList = function (head) {
  let prev = null;
  let next = null;

  let curr = head;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 203. Remove Linked List Elements
var removeElements = function (head, val) {
  if (!head) return head;

  const start = new ListNode(null, head);
  let prev = start;
  let h = head;
  while (h) {
    if (h.val === val) {
      prev.next = h.next;
    } else {
      prev = h;
    }
    h = h.next;
  }

  return start.next;
};

// 160. Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {
  let Alen = 0;
  let Blen = 0;

  let hA = headA;
  let hB = headB;
  while (hA || hB) {
    if (hA) {
      Alen++;
      hA = hA.next;
    }

    if (hB) {
      Blen++;
      hB = hB.next;
    }
  }

  if (Blen > Alen) {
    hB = headA;
    hA = headB;
  } else {
    hA = headA;
    hB = headB;
  }

  let diff = Math.abs(Alen - Blen);
  while (diff > 0) {
    hA = hA.next;
    diff--;
  }

  while (hA && hB) {
    if (hA === hB) {
      return hA;
    }

    hA = hA.next;
    hB = hB.next;
  }

  return null;
};

// 141. Linked List Cycle
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
};

// 143. Reorder List
var reorderList = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let curr = slow.next;
  let prev = null;
  let next = null;
  slow.next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let start = head;
  let middle = prev;
  while (middle) {
    const startNext = start.next;
    const middleNext = middle.next;

    start.next = middle;
    middle.next = startNext;

    start = startNext;
    middle = middleNext;
  }
  return head;
};

// 19. Remove Nth Node From End of List
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  let fast = head;
  let len = 0;
  while (fast && fast.next) {
    fast = fast.next.next;
    len += 2;
  }

  if (fast?.next || fast) {
    len += 1;
  }

  let position = len - n;
  let index = 1;

  if (position < 1) {
    head = head.next;
    return head;
  }

  let h = head;

  while (index < position && head.next) {
    index++;
    head = head.next;
  }
  head.next = head.next?.next ?? null;

  return h;
};

// 138. Copy List with Random Pointer

var copyRandomList = function (head) {
  if (!head) return head;

  let curr = head;

  while (curr) {
    const newNode = new _Node(curr.val, null, null);
    newNode.next = curr.next;
    curr.next = newNode;
    curr = newNode.next;
  }

  curr = head;
  while (curr) {
    curr.next.random = curr.random?.next ?? null;
    curr = curr.next.next;
  }

  let og = head;
  let resHead = head.next;
  let copy = resHead;
  while (og) {
    og.next = copy.next;
    og = og.next;

    if (og) {
      copy.next = og.next;
      copy = copy.next;
    }
  }

  return resHead;
};

// 2. Add Two Numbers
var addTwoNumbers = function (l1, l2) {
  let total = new ListNode(null, null);
  let totalHead = total;
  let carry = 0;
  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    const sumNode = new ListNode(sum, null);
    total.next = sumNode;
    total = total.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    const node = new ListNode(carry, null);
    total.next = node;
  }

  return totalHead.next;
};

// 287. Find the Duplicate Number

var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// 146. LRU Cache

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.left = new Node(null, null, null, null);
  this.right = new Node(null, null, null, null);
  this.left.next = this.right;
  this.right.prev = this.left;
  this.cache = new Map();
};

var Node = function (key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev;
  this.next = next;
};

LRUCache.prototype.add = function (node) {
  let prev = this.right.prev;
  this.right.prev = node;
  node.next = this.right;
  node.prev = prev;
  prev.next = node;
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache.get(key);
  if (node) {
    this.remove(node);
    this.add(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.cache.get(key);
  if (node) {
    this.remove(node);
  }

  let newNode = new Node(key, value, null, null);
  this.add(newNode);
  this.cache.set(key, newNode);

  if (this.cache.size > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

var mergeKLists = function (lists) {
  if (!lists || !lists.length) {
    return null;
  }

  while (lists.length > 1) {
    const mergedListsArr = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = lists[i + 1] ?? null;
      mergedListsArr.push(mergeList(l1, l2));
    }

    lists = mergedListsArr;
  }
  return lists[0];
};

var mergeList = function (l1, l2) {
  let dummy = new ListNode(null);
  let list = dummy;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      dummy.next = l2;
      l2 = l2.next;
    } else {
      dummy.next = l1;
      l1 = l1.next;
    }
    dummy = dummy.next;
  }

  if (l1) {
    dummy.next = l1;
  }

  if (l2) {
    dummy.next = l2;
  }

  return list.next;
};
