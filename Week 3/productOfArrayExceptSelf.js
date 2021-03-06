/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  const product = new Array(len);
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


// var productExceptSelf = function(nums) {
//   const len = nums.length;
//   const pref = [1];
//   let last;
//   for (let i = 0; i < len; i++) {
//     last = pref[pref.length-1];
//     pref.push(last * nums[i]);
//   }

//   const suf = new Array(pref.length).fill(1);
//   for (let i = len-1; i >= 0; i--) {
//     suf[i] = suf[i+1] * nums[i];
//   }

//   const answer = new Array(len);
//   for (let i = 0; i < len; i++) {
//     answer[i] = pref[i] * suf[i+1];
//   }
//   return answer;
// };


console.log(productExceptSelf([1,2,3,4]));  // expect: [24,12,8,6]
