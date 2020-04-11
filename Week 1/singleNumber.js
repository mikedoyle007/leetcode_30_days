/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   const hist = {};

//   for (let i = 0; i < nums.length; i++) {
//     hist[nums[i]] = hist[nums[i]] || 0;
//     hist[nums[i]] += 1;
//   }

//   for (let key in hist) {
//     if (hist[key] === 1) {
//       return key;
//     }
//   }
// };

/**
 * Notes:
 *
 * My first idea was to implement a hashmap and count the occurrences
 * then iterate through the hashmap and return the one that had a count of 1.
 *
 * However, in researching the different ways to solve this problem I found a few ways
 * to improve upon that approach.
 *
 * Using a hashmap is a good way to approach this problem, however make it a bit
 * smarter by deleting the item if it is ever spotted more than once. Basically instead
 * of incrementing the count, just delete it all together. That way in the end you don't
 * have to iterate through the hashmap (because the length will only be 1) ->
 * much faster!
 *
 * Could also use a Set.
 *
 */

// SMART HASHMAP
// var singleNumber = function(nums) {
//   const hist = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (hist[nums[i]] === 1) {
//       delete hist[nums[i]];
//     } else {
//       hist[nums[i]] = 1;
//     }
//   }

//   for (let key in hist) {
//     if (hist[key] === 1) {
//       return key;
//     }
//   }
// };

// SMART SET
//
// var singleNumber = function(nums) {
//   const mySet = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (mySet.has(nums[i])) {
//       mySet.delete(nums[i]);
//     } else {
//       mySet.add(nums[i]);
//     }
//   }

//   let single;
//   mySet.forEach(val => single = val);
//   return single;
// };


// BITWISE XOR ---- Super Cool!
//
var singleNumber = function(nums) {
  let x = 0;

  for (let i of nums) {
    x ^= i;
  }

  return x;
};

module.exports = singleNumber;
