/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min;
  if (this.size === 0) {
    min = x;
  } else {
    // min of current value or last known min
    min = Math.min(x, this.stack[this.size -1][1]);
  }

  this.stack.push([x, min]);
  this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.size--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.size -1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.size -1][1];
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
