const maxSubArray = require('./maxSubArray');

describe('Max Sub Array', () => {
  /**
  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  */

  test('it should return the sum of the maximum sub array', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubArray(nums)).toEqual(6);
  });

  test('it should return the sum of the maximum sub array', () => {
    const nums = [-2,1];
    expect(maxSubArray(nums)).toEqual(1);
  });

  test('it should return the sum of the maximum sub array', () => {
    const nums = [-2,-1];
    expect(maxSubArray(nums)).toEqual(-1);
  });
});
