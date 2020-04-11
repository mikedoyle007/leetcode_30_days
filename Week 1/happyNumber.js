/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//   if (!n) return false;
//   if (n < 0) {
//     n = n * -1;
//   }

//   let count = 0;
//   let current = n;

//   while (count < 10) {
//     let arr = current.toString().split('');
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       const num = Number(arr[i]);
//       sum += num * num;
//     }
//     if (sum === 1) return true;
//     else {
//       count++;
//       current = sum;
//     }
//   }

//   // not happy :(
//   return false;
// };

const f = num => {
  let sum = 0;
  while (num) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit * digit;
  }
  return sum;
}

// WITHOUT SET, JUST COUNTER
var isHappy = function(n) {
  let count = 0;

  while (count < 10) {
    if (n === 1) {
      return true;
    }
    n = f(n);
    count++;
  }
  return false;
};

// WITH SET
// var isHappy = function(n) {
//   const visited = new Set();
//   let count = 0;

//   while (count < 10) {
//     if (n === 1) {
//       return true;
//     }
//     n = f(n);
//     if (visited.has(n)) {
//       return false;
//     }
//     visited.add(n);
//     count++;
//   }
//   return false;
// };

console.log(isHappy(7) === true); // expect true
console.log(isHappy(8) === true); // expect false
