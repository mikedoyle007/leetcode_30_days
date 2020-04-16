/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Ignores the constrains of the problem
// var productExceptSelf = function(nums) {
//   const product = nums.reduce((a, b) => a * b);
//   const output = [];

//   for (let i = 0; i < nums.length; i++) {
//     output.push(product / nums[i]);
//   }

//   return output;
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  const product = [];
  const pref = new Array(len);
  const suff = new Array(len);

  pref[0] = 1;
  suff[len -1] = 1;

  for (let i = 1; i < len; i++) {
    pref[i] = nums[i-1] * pref[i-1];
  }

  for (let j = len - 2; j >= 0; j--) {
    suff[j] = nums[j+1] * suff[j+1]
  }

  for (let k = 0; k < len; k++) {
    product[k] = pref[k] * suff[k];
  }

  return product;
};


console.log(productExceptSelf([1,2,3,4]));
