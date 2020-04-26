/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//   let answer = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i];
//     if (sum === k) answer++;
//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === k) answer++;
//     }
//   }

//   return answer;
// };

// Using Hash Map
var subarraySum = function(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();

  // pre-fill with sum of 0
  map.set(0, 1);  // (sum, occurrences)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    // add/update sum in map
    const occurrences = map.get(sum) || 0;
    map.set(sum, occurrences + 1);
  }

  return count;
}
