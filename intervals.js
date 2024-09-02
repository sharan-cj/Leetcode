// 1851. Minimum Interval to Include Each Query

var minInterval = function (intervals, queries) {
  const qArr = [...queries].sort((a, b) => a - b);
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let i = 0;
  let res = {};
  const minHeap = new MinPriorityQueue();
  for (let q of qArr) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [s, e] = intervals[i];
      const priority = e - s + 1;
      minHeap.enqueue(e, priority);
      i++;
    }

    while (minHeap.size() && minHeap.front().element < q) {
      minHeap.dequeue();
    }

    res[q] = minHeap.size() ? minHeap.front().priority : -1;
  }

  return queries.map((q) => res[q]);
};

// 253. Meeting Rooms II: Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

const numOfMeetingRooms = (intervals) => {
  const startArr = [];
  const endArr = [];

  intervals.forEach(([s, e]) => {
    startArr.push(s);
    endArr.push(e);
  });

  startArr.sort((a, b) => a - b);
  endArr.sort((a, b) => a - b);

  let s = 0;
  let e = 0;
  let res = 0;
  let count = 0;
  while (s < intervals.length) {
    if (startArr[s] < endArr[e]) {
      s++;
      count++;
    } else {
      e++;
      count--;
    }
    res = Math.max(res, count);
  }

  return res;
};

console.log(
  numOfMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  numOfMeetingRooms([
    [7, 10],
    [2, 4],
  ])
);

// // 252. Meeting Rooms: Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// const meetingRooms = (meetings) => {
//   meetings.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < meetings.length - 1; i++) {
//     if (meetings[i][1] > meetings[i + 1][0]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(
//   meetingRooms([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ])
// );
// console.log(meetingRooms([[7, 10], [(2, 4)]]));

// // 57. Insert Interval

// var insert = function (intervals, newInterval) {
//   const res = [];

//   for (let i in intervals) {
//     if (newInterval[1] < intervals[i][0]) {
//       return [...res, newInterval, ...intervals.slice(i)];
//     }
//     if (newInterval[0] > intervals[i][1]) {
//       res.push(intervals[i]);
//     } else {
//       newInterval = [
//         Math.min(newInterval[0], intervals[i][0]),
//         Math.max(newInterval[1], intervals[i][1]),
//       ];
//     }
//   }
//   res.push(newInterval);
//   return res;
// };

// // 56. Merge Intervals

// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);

//   const res = [];

//   for (let i of intervals) {
//     if (res.length && res[res.length - 1][1] >= i[0]) {
//       const [start, end] = res.pop();
//       res.push([start, Math.max(end, i[1])]);
//     } else {
//       res.push(i);
//     }
//   }

//   return res;
// };

// // 435. Non-overlapping Intervals

// var eraseOverlapIntervals = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let res = 0;
//   let prevEnd = intervals[0][1];
//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] < prevEnd) {
//       prevEnd = Math.min(intervals[i][1], prevEnd);
//       res++;
//     } else {
//       prevEnd = intervals[i][1];
//     }
//   }
//   return res;
// };
