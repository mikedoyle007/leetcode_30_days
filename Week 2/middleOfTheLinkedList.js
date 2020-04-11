/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function(head) {
//   let len = 0;
//   let ptr = head;
//   while (ptr) {
//     len++;
//     ptr = ptr.next;
//   }

//   const dist = Math.floor(len / 2);
//   let cnt = 0;
//   ptr = head;
//   while (cnt < dist) {
//     ptr = ptr.next;
//     cnt++;
//   }

//   return ptr;
// };

// Array method
// var middleNode = function(head) {
//   const arr = [];
//   let ptr = head;
//   while (ptr) {
//     arr.push(ptr);
//     ptr = ptr.next;
//   }
//   return arr[Math.floor(arr.length / 2)];
// };


// Fast and Slow Pointer method
var middleNode = function(head) {
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);
list2.next.next.next.next.next = new ListNode(6);



console.log(middleNode(list));
console.log(middleNode(list2));

console.log(Math.floor(6/2));
