/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  // 52ms runtime - just trimmed the fat
  // let stop = nums.length;

  // for (let i = 0; i < stop; i++) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //     stop--;
  //     i--;
  //   }
  // }

  // Errichto's solution
  const n = nums.length;
  let nxt = 0;
  for (let x of nums) {
    if (x !== 0) {
      nums[nxt] = x;
      nxt++;
    }
  }
  for (let i = nxt; i < n; i++) {
    nums[i] = 0;
  }


  // 52ms runtime
  // const len = nums.length;
  // let swaps = 0;
  // let stop = len - swaps;

  // for (let i = 0; i < stop; i++) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //     swaps++;
  //     stop--;
  //     i--;
  //   }
  // }



  // FASTEST SO FAR
  // let count = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     count++;
  //     nums.splice(i, 1);
  //     i--;
  //   }
  // }

  // for (count; count > 0; count--) {
  //   nums.push(0);
  // }





  // let len = nums.length;
  // let back = len - 1;
  // let swaps = 1;

  // // find start position for back
  // for (let i = back; i >= 0; i--) {
  //   if (nums[i] !== 0) {
  //     back = i;
  //     // early exit if all zeros or all but one zero
  //     if (i === 0 || i === 1) {
  //       return;
  //     }
  //     break;
  //   }
  // }

  // while (swaps) {
  //   swaps = 0;
  //   for (let i = 0; i < back; i++) {
  //     if (nums[i] === 0) {
  //       // swap
  //       [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  //       swaps++;
  //     }
  //   }
  //   back--;
  // }




  // const len = nums.length;
  // let back = len - 1;
  // let swaps = 1;

  // // set back to first non-zero number starting from back
  // for (let i = len - 1; i >= 0; i--) {
  //   if (nums[i] !== 0) {
  //     back = i;
  //     // if all zeroes, return
  //     if (i === 0 || i === 1) {
  //       return;
  //     }
  //     break;
  //   }
  // }

  // for (let i = 0; i < back; i++) {
  //   if (nums[i] === 0) {
  //     // swap
  //     [nums[i], nums[back]] = [nums[back], nums[i]];
  //     swaps++;
  //     // decrement back
  //     back--;
  //   }
  // }
};

const nums = [0,1,0,3,12];
const nums2 = [0,0,0,0,0];
const nums3 = [1,0,0,0,0];
const nums4 = [0,0,1];

// [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];

moveZeroes(nums);
moveZeroes(nums2);
moveZeroes(nums3);
moveZeroes(nums4);

console.log(nums);
console.log(nums2);
console.log(nums3);
console.log(nums4);




const temp = [1, 2];

[temp[0], temp[1]] = [temp[1], temp[0]];

console.log(temp);
