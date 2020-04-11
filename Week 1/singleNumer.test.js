const singleNumber = require('./singleNumber');

describe('Single Number', () => {

  test('it should return the single number that is not repeated', () => {
    const nums = [4,1,2,1,2];

    expect(singleNumber(nums)).toEqual(4);
  });
});
