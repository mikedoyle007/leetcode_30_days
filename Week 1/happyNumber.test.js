const isHappy = require('./happyNumber');

describe('Happy Number', () => {

  test('it should true if number is \'happy\', and false otherwise', () => {
    expect(isHappy(7)).toBeTruthy();
  });

  test('it should true if number is \'happy\', and false otherwise', () => {
    expect(isHappy(8)).toBeFalsy();
  });

  test('it should true if number is \'happy\', and false otherwise', () => {
    expect(isHappy(19)).toBeTruthy();
  });
});
