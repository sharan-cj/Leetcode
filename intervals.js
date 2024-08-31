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
