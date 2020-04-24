/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  let count = 0;

  while (m !== n) {
    m>>=1;
    n>>=1;
    count++;
  }

  return m<<=count;
};

/**
 * Compare m to n
 * When they are not equal right shift off the LSB
 * Increment counter
 * Once they are equal, exit loop
 * Right shift 0's count times
 * Return m
 */
