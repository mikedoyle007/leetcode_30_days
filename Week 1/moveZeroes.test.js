const moveZeroes = require('./moveZeroes');

describe('Move Zeroes', () => {

  test('it should move all zeroes to the end of the original array', () => {
    const nums = [0,1,0,3,12];
    moveZeroes(nums);
    expect(nums).toEqual([1,3,12,0,0]);
  });

  test('it should move all zeroes to the end of the original array', () => {
    const nums = [0,0,0,0,0];
    moveZeroes(nums);
    expect(nums).toEqual([0,0,0,0,0]);
  });

  test('it should move all zeroes to the end of the original array', () => {
    const nums = [1,0,0,0,0];
    moveZeroes(nums);
    expect(nums).toEqual([1,0,0,0,0]);
  });

  test('it should move all zeroes to the end of the original array', () => {
    const nums = [0,0,1];
    moveZeroes(nums);
    expect(nums).toEqual([1,0,0]);
  });
});
