/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums === null || nums.length === 0) return - 1;

  let left = 0;
  let right = nums.length - 1;

  // binary search to find midpoint (pivot)
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    // let mid = Math.floor(nums.length / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid;
    }
  }

  let start = left;
  left = 0;
  right = nums.length - 1;

  // determine which side of the pivot to start
  // searching on
  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  // binary search to find target
  while (left <= right) {
    // let mid = left + (right - left) / 2;
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};


// console.log(search([1,3], 0));  // expect -1
// console.log(search([4,5,6,7,0,1,2], 0));  // expect 4
// console.log(search([], 0));  // expect -1
// console.log(search([4,5,6,7,0,1,2], 3));  // expect -1
// console.log(search([1,3,5], 5));  // expect 2
// console.log(search([1,3,5], 4));  // expect -1
// console.log(search([1,3], 4));  // expect -1
// console.log(search([3,5,1], 1));  // expect 2
// console.log(search([1,3], 1));  // expect 0
