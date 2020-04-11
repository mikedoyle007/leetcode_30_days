/**
 * @param {number[]} arr
 * @return {number}
 */
// var countElements = function(arr) {
//   let count = 0;
//   const hm = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i] + 1;
//     if (hm[num]) {
//       count++;
//     } else if (arr.indexOf(num) !== -1) {
//       hm[num] = true;
//       count++;
//     }
//   }
//   return count;
// };

// Maybe faster
// var countElements = function(arr) {
//   let count = 0;
//   const hm = {};
//   for (let i = 0; i < arr.length; i++) {
//     hm[arr[i]] = true;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (hm[arr[i] + 1]) {
//       count++;
//     }
//   }
//   return count;
// };

// errichto: uses set
// add elements to set, ask if set has (item + 1)
// yes: increase count
// return count
const countElements = arr => {
  const set = new Set();
  for (let x of arr) {
    set.add(x);
  }
  let cnt = 0;
  for (let x of arr) {
    if (set.has(x+1)) {
      cnt++;
    }
  }
  return cnt;
}

const arr1 = [1,2,3];
const arr2 = [1,1,3,3,5,5,7,7];
const arr3 = [1,3,2,3,5,0];
const arr4 = [1,1,2,2];

console.log(countElements(arr1)); // 2
console.log(countElements(arr2)); // 0
console.log(countElements(arr3)); // 3
console.log(countElements(arr4)); // 2
