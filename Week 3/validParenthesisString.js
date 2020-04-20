// var checkValidString = function(s) {
//   let low = 0;
//   let high = 0;

//   const chars = s.split('');

//   for (let c of chars) {
//     if (c === '(') {
//       low += 1;
//     } else {
//       low += -1;
//     }

//     // if open paren or wildcard
//     if (c !== ')') {
//       high += 1;
//     } else {
//       high += -1;
//     }

//     if (high < 0) {
//       break;
//     }

//     low = Math.max(low, 0);
//   }
//   return low === 0;
// };

// Errichto's solution
var checkValidString = function(s) {
  const len = s.length;
  let balance = 0;
  // check forwards
  for (let i = 0; i < len; i++) {
    if (s[i] === '(' || s[i] === '*') {
      balance++;
    } else if (--balance === -1) {
      return false;
    }
  }

  balance = 0;
  // check backwards
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === ')' || s[i] === '*') {
      balance++;
    } else if (--balance === -1) {
      return false;
    }
  }

  return true;
}
