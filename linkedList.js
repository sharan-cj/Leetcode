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
