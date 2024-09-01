// 57. Insert Interval

var insert = function (intervals, newInterval) {
  const res = [];

  for (let i in intervals) {
    if (newInterval[1] < intervals[i][0]) {
      return [...res, newInterval, ...intervals.slice(i)];
    }
    if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }
  res.push(newInterval);
  return res;
};

// 56. Merge Intervals

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];

  for (let i of intervals) {
    if (res.length && res[res.length - 1][1] >= i[0]) {
      const [start, end] = res.pop();
      res.push([start, Math.max(end, i[1])]);
    } else {
      res.push(i);
    }
  }

  return res;
};

// 435. Non-overlapping Intervals

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      prevEnd = Math.min(intervals[i][1], prevEnd);
      res++;
    } else {
      prevEnd = intervals[i][1];
    }
  }
  return res;
};
