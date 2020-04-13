/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's Algorithm
var maxSubArray = function(nums) {
  let sum = -Infinity;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }

  return max;
};


// Divide & Conquer Approach
// FIXME: Doesn't work yet...
// var maxSubArray = function(nums) {
//   const len = nums.length;
//   if (len === 1) {
//     return nums[0];
//   }

//   const mid = (len - 1) / 2;
//   let bestLeft = -Infinity;
//   let sum = 0;
//   for (let i = mid; i >= 0; i--) {
//     sum += nums[i];
//     bestLeft = Math.max(bestLeft, sum);
//   }
//   let bestRight = -Infinity;
//   sum = 0;
//   for (let i = mid + 1; i < len; i++) {
//     sum += nums[i];
//     bestRight = Math.max(bestRight, sum);
//   }
//   const left = nums.slice(0, mid + 1);
//   const right = nums.slice(mid + 1);
//   const answer = Math.max(maxSubArray(left), maxSubArray(right), (bestLeft + bestRight));
//   return answer;
// };


// WORKS: SLOW
//
// var maxSubArray = function(nums) {
//   if (nums.length === 1) return nums[0];

//   let sum = nums[0];
//   let maxSoFar = sum;

//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       let subArr = nums.slice(i, j + 1);
//       sum = subArr.reduce((accum, val) => accum + val);
//       if (sum > maxSoFar) {
//         maxSoFar = sum;
//       }
//     }
//   }

//   return maxSoFar;
// };


// WORKS (RECURSIVE): SLOW
//
// var maxSubArray = function(nums) {
//   const length = nums.length;
//   if (length === 1) return nums[0];

//   let maxSoFar = nums[0];
//   const totalSum = nums.reduce((a, b) => a + b);

//   const findGreatest = (subArr, sum, len) => {
//     if (len === 1) {
//       if (subArr[0] > maxSoFar) {
//         maxSoFar = subArr[0];
//       }
//       return;
//     } else {
//       const start = 0;
//       const end = len;

//       if (sum > maxSoFar) maxSoFar = sum;

//       const first = sum - subArr[start];
//       if (first > maxSoFar) maxSoFar = first;
//       findGreatest(subArr.slice(start + 1, end), first, len - 1);

//       const last = sum - subArr[end - 1];
//       if (last > maxSoFar) maxSoFar = last;
//       findGreatest(subArr.slice(start, end - 1), last, len - 1);
//     }
//   }

//   findGreatest(nums, totalSum, length);

//   return maxSoFar;
// };

module.exports = maxSubArray;
