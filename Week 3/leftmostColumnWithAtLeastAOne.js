/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();

  let leftmostCol = -1;
  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      const val = binaryMatrix.get(r, c);
      if (val !== null && val === 1) {
        leftmostCol = c;
      } else if (val !== null && val === 0) {
        // go up a row
        if (r > 0) {
          r--;
          // stay in the same col
          c++;
        } else {
          break;
        }
      }
    }
  }

  // Not found
  return leftmostCol;
};
