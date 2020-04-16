/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  const a = s.split('');

  for (let i = 0; i < shift.length; i++) {
    const matrix = shift[i];    // matrix = [0, 1]
    for (let j = 0; j < matrix[1]; j++) {
      if (matrix[0] === 0) {
        // shift left => remove first, append to end
        const char = a.shift();
        a.push(char);
      } else if (matrix[0] === 1) {
        // shift right => remove last, prepend to start
        const char = a.pop();
        a.unshift(char);
      }
    }
  }

  return a.join('');
};

console.log(stringShift('abc', [[0,1], [1,2]]));  // expect: 'cab'
console.log(stringShift('abcdefg', [[1,1],[1,1],[0,2],[1,3]]));  // expect: 'efgabcd'
