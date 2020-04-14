/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function(nums) {
//   let max = 0;
//   let size = 2;

//   while (size <= nums.length) {
//     for (let i = 0; i < nums.length; i++) {
//       const sub = nums.slice(i, i + size);
//       console.log(sub);
//       console.log(sub.length);
//       console.log(sub.reduce((a, b) => a + b));
//       if (sub.length === size && sub.reduce((a, b) => a + b) === size / 2) {
//         // found one, move on to next size
//         console.log(sub);
//         console.log(size);
//         console.log(max);
//         max = size;
//         break;
//       }
//     }
//     size += 2;
//     console.log(max);
//   }

//   return max;
// };


// TIMED OUT
// var findMaxLength = function(nums) {
//   const len = nums.length;
//   if (len === 0 || len === 1) return 0;

//   let size = len;
//   if (size % 2 !== 0) {
//     size--;
//   }

//   while (size <= len) {
//     for (let i = 0; i < len; i++) {
//       const sub = nums.slice(i, i + size);
//       console.log(sub);
//       const sum = sub.reduce((a, b) => a + b)
//       if (sum === size) break;
//       if (sub.length === size && sum === size / 2) {
//         return size;
//       }
//     }
//     size -= 2;
//     if (size === 0) {
//       break;
//     }
//   }

//   return 0;
// };

// var findMaxLength = function(nums) {
//   let map = {0: -1};
//   let count = 0;
//   let max = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // if (nums[i] === 0) {
//     //   count -= 1;
//     // } else {
//     //   count += 1;
//     // }
//     nums[i] === 0 ? count -= 1 : count += 1;

//     if (map[count] != null) {
//       max = Math.max(max, i - map[count]);
//       console.log(max);
//     } else {
//       map[count] = i;
//     }
//   }

//   console.log(map);
//   return max;
// };

var findMaxLength = function(nums) {
  let count = 0;
  let maxLen = 0;
  const map = {0: -1};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      count -= 1;
    }

    if (map[count] != null) {
      maxLen = Math.max(maxLen, i - map[count]);
    } else {
      map[count] = i;
    }
  }

  return maxLen;
};

// Using a JS Map
// var findMaxLength = function(nums) {
//   let count = 0;
//   let maxLen = 0;
//   const map = new Map();
//   map.set(0, -1);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       count += 1;
//     } else {
//       count -= 1;
//     }

//     if (map.has(count)) {
//       maxLen = Math.max(maxLen, i - map.get(count));
//     } else {
//       map.set(count, i);
//     }
//   }

//   return maxLen;
// };

// var findMaxLength = function(nums) {
//   let counts = {0: -1};
//   let count = 0;
//   max = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     nums[i] === 0 ? count -= 1 : count += 1;

//     if (counts[count] != null) {
//       max = Math.max(max, i - counts[count])
//     } else {
//       counts[count] = i;
//     }
//   }
//   return max;
// };

// console.log(findMaxLength([0,1,1,0,1,1,1,0]));
// console.log(findMaxLength([0,1]));
// console.log(findMaxLength([0,0,1,0,0,0,1,1]));
// console.log(findMaxLength([1,1,1,1,1,1,1,1]));
// console.log(findMaxLength([]));
// console.log(findMaxLength([1]));
console.log(findMaxLength([0,0,1]));
