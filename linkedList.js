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
