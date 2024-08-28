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

// 1046. Last Stone Weight
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

// 215. Kth Largest Element in an Array

var findKthLargest = function (nums, k) {
  const heap = new MinPriorityQueue();

  for (n of nums) {
    heap.enqueue(n);
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  return heap.front().element;
};

// 621. Task Scheduler

var leastInterval = function (tasks, n) {
  const map = new Map();

  for (let task of tasks) {
    const count = map.get(task) ?? 0;
    map.set(task, count + 1);
  }

  const maxHeap = new MaxPriorityQueue();
  map.forEach((val) => {
    maxHeap.enqueue(val);
  });

  const q = [];
  let timer = 0;
  while (maxHeap.size() || q.length) {
    timer++;
    if (maxHeap.size()) {
      let task = maxHeap.dequeue().element ?? 0;
      task--;
      if (task > 0) {
        q.push({ task, timer: timer + n });
      }
    }
    if (q.length && q[0].timer <= timer) {
      const task = q.shift();
      maxHeap.enqueue(task.task);
    }
  }

  return timer;
};

// 506. Relative Ranks
var findRelativeRanks = function (score) {
  const res = [];
  const map = new Map();
  const maxHeap = new MaxPriorityQueue();
  for (let i in score) {
    map.set(score[i], i);
    maxHeap.enqueue(score[i]);
  }

  let rank = 0;

  while (maxHeap.size()) {
    rank++;
    const score = maxHeap.dequeue().element;
    if (rank === 1) {
      res[map.get(score)] = "Gold Medal";
    } else if (rank === 2) {
      res[map.get(score)] = "Silver Medal";
    } else if (rank === 3) {
      res[map.get(score)] = "Bronze Medal";
    } else {
      res[map.get(score)] = `${rank}`;
    }
  }

  return res;
};

// 1464. Maximum Product of Two Elements in an Array
var maxProduct = function (nums) {
  const minHeap = new MinPriorityQueue();
  for (n of nums) {
    if (minHeap.size() < 2) {
      minHeap.enqueue(n);
    } else if (minHeap.front().element < n) {
      minHeap.dequeue();
      minHeap.enqueue(n);
    }
  }
  const i = minHeap.dequeue().element;
  const j = minHeap.dequeue().element;
  return (i - 1) * (j - 1);
};

// 2099. Find Subsequence of Length K With the Largest Sum
var maxSubsequence = function (nums, k) {
  const minHeap = new MinPriorityQueue();

  for (let i in nums) {
    if (minHeap.size() < k) {
      minHeap.enqueue(i, nums[i]);
    } else if (minHeap.front().priority < nums[i]) {
      minHeap.dequeue();
      minHeap.enqueue(i, nums[i]);
    }
  }

  const res = [];

  while (minHeap.size()) {
    const num = minHeap.dequeue();
    res.push(num);
  }

  return res.sort((a, b) => a.element - b.element).map((e) => e.priority);
};

// 2974. Minimum Number Game

var numberGame = function (nums) {
  const minHeap = new MinPriorityQueue();

  for (let n of nums) {
    minHeap.enqueue(n);
  }

  const arr = [];
  while (minHeap.size() > 1) {
    const alice = minHeap.dequeue().element;
    const bob = minHeap.dequeue().element;
    arr.push(bob);
    arr.push(alice);
  }

  if (minHeap.size()) {
    arr.push(minHeap.dequeue().element);
  }
  return arr;
};
