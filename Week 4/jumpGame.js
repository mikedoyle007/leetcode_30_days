/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const length = nums.length;
  if (!nums || length === 0) {
    return false;
  }

  let max = 0;

  for (let i = 0; i < length; i++) {
    max = Math.max(nums[i], max - 1);

    if (max < 0 || (nums[i] === 0 && max === 0 && i !== length -1)) {
      return false;
    }
  }

  // made it to the end
  return true;
};

// var canJump = function(nums) {
//   const length = nums.length;
//   if (!nums || length === 0) {
//     return false;
//   }

//   let max = 0;

//   for (let i = 0; i < length; i++) {
//     if (nums[i] >= max) {
//       max = nums[i];
//     } else {
//       max--;

//       if (max < 0) {
//         return false;
//       }
//     }

//     if (nums[i] === 0 && max === 0 && i !== length -1) {
//       return false;
//     }
//   }

//   // made it to the end
//   return true;
// };
