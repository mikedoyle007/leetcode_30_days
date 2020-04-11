/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspace = s => {
  const arr = [];
  let skips = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '#') {
      if (skips === 0) {
        arr.push(s[i]);
      } else {
        skips--;
      }
    } else {
      skips++;
    }
  }
  return arr.join('');
}

var backspaceCompare = function(S, T) {
  const s = backspace(S);
  const t = backspace(T);
  return s === t ? true : false;
};


const S1 = 'ab#c';
const T1 = 'ad#c';

console.log(backspaceCompare(S1, T1));          // true
console.log(backspaceCompare('ab##', 'c#d#'));  // true
console.log(backspaceCompare('a##c', '#a#c'));  // true
console.log(backspaceCompare('a#c', 'b'));      // false
