// TITLE: Check if a String is a Valid Sequence from Root to Leaves Path in a Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  const len = arr.length;
  let isValid = false;

  const traverse = (node, i) => {
    if (!node) return null;

    if (node.val !== arr[i]) return;

    const left = traverse(node.left, i + 1);
    const right = traverse(node.right, i + 1);

    if (node.val === arr[i] && i === len -1) {
      if (left === null && right === null) {
        isValid = true;
        return;
      } else {
        return;
      }
    }
  }

  traverse(root, 0);

  return isValid;
};
