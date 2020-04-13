const groupAnagrams = require('./groupAnagrams');

describe('Group Anagrams', () => {
  test('it should group anagrams and return them', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    expect(groupAnagrams(input)).toEqual(expected);
  });

  test('it should group anagrams and return them', () => {
    const input = ["tea","","eat","","tea",""];
    const expected = [["tea", "eat", "tea"], ["", "", ""]];

    expect(groupAnagrams(input)).toEqual(expected);
  });
});
