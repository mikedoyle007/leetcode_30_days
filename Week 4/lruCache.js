/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // LRU represented by the first item in the Map
  // MRU represented by the last item in the Map
  this.cap = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // Check if key exists
  if (this.map.has(key)) {
    const value = this.map.get(key);

    // Update usage status by moving to back of Map
    this.map.delete(key);
    this.map.set(key, value);

    return value;
  } else {
    // Not found
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // Run get() to update usage status
  this.get(key);

  this.map.set(key, value);

  // Maintain capacity
  if (this.map.size > this.cap) {
    // Remove LRU (first item in Map)
    let lru = this.map.entries().next().value;
    this.map.delete(lru[0]);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
