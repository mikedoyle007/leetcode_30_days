/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const makeHashMap = (s) => {
  const hm = {};
  for (let i = 0; i < s.length; i++) {
    hm[s[i]] = hm[s[i]] || 0;
    hm[s[i]]++;
  }
  return hm;
}

const isAnagram = (hm1, hm2) => {
  if (Object.keys(hm1).length !== Object.keys(hm2).length) {
    return false;
  }
  for (let key in hm1) {
    if (hm1[key] !== hm2[key]) {
      return false;
    }
  }
  return true;
}

var groupAnagrams = function(strs) {
  const maps = [];
  const group = [];

  // make first
  maps.push(makeHashMap(strs[0]));
  group.push([strs[0]]);

  // iterate thru the rest
  for (let i = 1; i < strs.length; i++) {
    // compare with maps
    let hashMap = makeHashMap(strs[i]);
    for (let j = 0; j < maps.length; j++) {
      if (isAnagram(hashMap, maps[j])) {
        // add it
        group[j].push(strs[i]);
        break;
      } else if (j === maps.length - 1) {
        // add the new one
        group.push([strs[i]]);
        maps.push(hashMap);
        break;
      }
    }
  }
  return group;
};

// One I found online
// var groupAnagrams = function(strs) {
//     let res = new Map();
//     strs.map(value=>{
//         let str =[... value].sort().join('');
//         if (res.has(str)){
//             let arr = res.get(str)
//             arr.push(value);
//             res.set(str, arr);
//         }else res.set(str,[value]);
//     });
//     return [...res.values()];
// };

module.exports = groupAnagrams;
