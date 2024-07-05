const searchMatrix = function (matrix, target) {
  const m = matrix[0].length;
  const n = matrix.length;
  const len = m * n;

  const getValueFromIndex = (i) => {
    let row = Math.floor(i / m);
    const column = i % m;
    return matrix[row][column];
  };

  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (getValueFromIndex(mid) === target) {
      return true;
    }

    if (target > getValueFromIndex(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

// // L704. Binary Search
// const search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (target === nums[mid]) {
//       return mid;
//     }

//     if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return -1;
// };

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
