const countElements = require('./countingElements');

describe('Counting Elements', () => {
  test('it should count x such that x+1 is also in the array', () => {
    const arr = [1,2,3];
    expect(countElements(arr)).toBe(2);
  });

  test('it should count x such that x+1 is also in the array', () => {
    const arr = [1,1,3,3,5,5,7,7];
    expect(countElements(arr)).toBe(0);
  });

  test('it should count x such that x+1 is also in the array', () => {
    const arr = [1,3,2,3,5,0];
    expect(countElements(arr)).toBe(3);
  });

  test('it should count x such that x+1 is also in the array', () => {
    const arr = [1,1,2,2];
    expect(countElements(arr)).toBe(2);
  });
});
