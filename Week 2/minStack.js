/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.size = 0;
  this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.min === null || x < this.min) {
    this.min = x;
  }
  this.stack.push(x);
  this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let item = this.stack.pop();
  this.size--;
  if (this.size === 0) {
    this.min = null;
  } else if (item === this.min) {
    // find new min
    let minSoFar = this.stack[0];
    for (let i = 1; i < this.size; i++) {
      if (this.stack[i] < minSoFar) {
        minSoFar = this.stack[i];
      }
    }
    this.min = minSoFar;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.size -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const stack = new MinStack();
stack.push(2147483646);
stack.push(2147483646);
stack.push(2147483647);
console.log(stack);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.getMin());
console.log(stack.pop());
console.log(stack.getMin());
console.log(stack);
console.log(stack.pop());
stack.push(2147483647);
console.log(stack.top());
console.log(stack);
console.log(stack.getMin());
stack.push(-2147483648);
console.log(stack.top());
console.log(stack.getMin());
console.log(stack.pop());
console.log(stack.getMin());




// const stack = new MinStack();
// stack.push(2);
// stack.push(3);
// stack.push(1);
// stack.push(0);
// stack.push(-1);
// console.log(stack);
// stack.pop();
// console.log(stack);
// console.log(stack.top());
// console.log(stack.getMin());
