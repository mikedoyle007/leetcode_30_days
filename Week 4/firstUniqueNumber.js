/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.map = new Map();
  nums.forEach(num => {
    // this.map.set(num, this.map.get(num) + 1 || 1);
    this.add(num);
  });
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  let firstUnique = -1;
  for (let [key, value] of this.map.entries()) {
    if (value === 1) {
      firstUnique = key;
      break;
    }
  }
  return firstUnique;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.map.has(value)) {
    this.map.set(value, this.map.get(value) + 1 || 1);
  } else {
    this.map.set(value, 1);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */



// 360 ms
/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  // Use Maps to preserve order of insertion
  this.unique = new Map();
  this.multiple = new Map();

  // Add to unique or multiple
  nums.forEach(num => {
    this.add(num);
  });
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  let first = -1;
  for (let [key, value] of this.unique.entries()) {
    if (value === 1) {
      first = key;
      break;
    }
  }
  return first;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (!this.multiple.has(value)) {
    if (this.unique.has(value)) {
      // delete and move to multiple
      this.unique.delete(value);
      this.multiple.set(value, 1);
    } else {
      this.unique.set(value, 1);
    }
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
