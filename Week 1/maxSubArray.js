/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's Algorithm
// var maxSubArray = function(nums) {
//   let sum = -Infinity;
//   let max = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     sum = Math.max(sum + nums[i], nums[i]);
//     max = Math.max(sum, max);
//   }

//   return max;
// };

// Divide & Conquer Approach
var maxSubArray = function(nums) {
  const len = nums.length;
  console.log(nums);
  if (len === 1) {
    return nums[0];
  }

  const mid = (len - 1) / 2;
  let bestLeft = -Infinity;
  let sum = 0;
  for (let i = mid; i >= 0; i--) {
    sum += nums[i];
    bestLeft = Math.max(bestLeft, sum);
  }
  let bestRight = -Infinity;
  sum = 0;
  for (let i = mid + 1; i < len; i++) {
    sum += nums[i];
    bestRight = Math.max(bestRight, sum);
  }
  const left = nums.slice(0, mid + 1);
  console.log(left)
  const right = nums.slice(mid + 1);
  console.log(right);
  console.log(maxSubArray(left));
  console.log(maxSubArray(right));
  const answer = Math.max(maxSubArray(left), maxSubArray(right), (bestLeft + bestRight));
  console.log(answer);
  return answer;
};

/**
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

const nums = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [-2,1];
const nums3 = [-2,-1];
console.log(maxSubArray(nums));   // 6 expect: true
console.log(maxSubArray(nums2));  // 1 expect: true
console.log(maxSubArray(nums3)); // -1 expect: true


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

// DOESN'T WORK
//
// var maxSubArray = function(nums) {
//   const len = nums.length;
//   if (len === 1) return nums[0];

//   let sumOfNums = nums.reduce((a, b) => a + b);
//   let sum = sumOfNums;
//   let maxSoFar = sum;

//   for (let i = 0, j = len - 1; i < j; i++, j--) {
//     let a = sumOfNums - nums[i];
//     if (a > maxSoFar) {
//       maxSoFar = a;
//     }
//     let b = sumOfNums - nums[j];
//     if (b > maxSoFar) {
//       maxSoFar = b;
//     }
//     let c = sumOfNums - nums[i] - nums[j];
//     if (c > maxSoFar) {
//       maxSoFar = c;
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
