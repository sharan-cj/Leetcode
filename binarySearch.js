// L33. Search in Rotated Sorted Array

const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    console.log(l, r, mid);

    if (nums[l] <= nums[mid]) {
      if (nums[l] > target || nums[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (nums[r] < target || nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// // L153. Find Minimum in Rotated Sorted Array
// const findMin = function (nums) {
//   let l = 0;
//   let r = nums.length - 1;
//   let res = nums[l];

//   while (l < r) {
//     const mid = Math.floor(l + (r - l) / 2);
//     if (nums[mid] < nums[r]) {
//       r = mid;
//     } else {
//       l = mid + 1;
//     }
//   }
//   res = nums[l];
//   return res;
// };

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

// // L875. Koko Eating Bananas
// const minEatingSpeed = function (piles, h) {
//   const findHoursToFinish = (k) => {
//     let h = 0;
//     for (let i = 0; i < piles.length; i++) {
//       h += Math.ceil(piles[i] / k);
//     }
//     return h;
//   };

//   let l = 1;
//   let r = Math.max(...piles);

//   let res = r;
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     const htf = findHoursToFinish(mid);
//     console.log(l, r, mid, htf);
//     if (htf > h) {
//       l = mid + 1;
//     } else {
//       res = Math.min(res, mid);
//       r = mid - 1;
//     }
//   }
//   return res;
// };

// console.log(minEatingSpeed([312884470], 312884469));

// L74. Search a 2D Matrix
// const searchMatrix = function (matrix, target) {
//   const m = matrix[0].length;
//   const n = matrix.length;
//   const len = m * n;

//   const getValueFromIndex = (i) => {
//     let row = Math.floor(i / m);
//     const column = i % m;
//     return matrix[row][column];
//   };

//   let left = 0;
//   let right = len - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (getValueFromIndex(mid) === target) {
//       return true;
//     }

//     if (target > getValueFromIndex(mid)) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return false;
// };

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

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
