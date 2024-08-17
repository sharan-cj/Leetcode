// 703. Kth Largest Element in a Stream

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinPriorityQueue();
  for (let n of nums) {
    this.add(n);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minHeap.size() < this.k) {
    this.minHeap.enqueue(val);
  } else if (val > this.minHeap.front().element) {
    this.minHeap.dequeue();
    this.minHeap.enqueue(val);
  }
  return this.minHeap.front().element;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxPriorityQueue();

  for (let stone of stones) {
    heap.enqueue(stone);
  }

  while (heap.size() > 1) {
    const first = heap.dequeue().element;
    const second = heap.dequeue().element;
    if (first !== second) {
      heap.enqueue(first - second);
    }
  }
  return heap.size() === 0 ? 0 : heap.front().element;
};

// 973. K Closest Points to Origin

var kClosest = function (points, k) {
  const q = new MinPriorityQueue();

  for (let p of points) {
    q.enqueue(p, p[0] ** 2 + p[1] ** 2);
  }

  let i = 0;
  const out = [];
  while (i < k) {
    i++;
    out.push(q.dequeue().element);
  }

  return out;
};
