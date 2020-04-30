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
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -Infinity;

  const traverse = node => {
    if (!node) return null;

    const left = traverse(node.left);
    const right = traverse(node.right);
    const val = node.val;

    // both ok
    if (left !== null && right !== null) {
      max = Math.max(max, val, left + val, right + val, left + val + right);
      return Math.max(val, val + Math.max(left, right));

      // only left
    } else if (left !== null) {
      max = Math.max(max, val, left + val);
      return Math.max(val, val + left);

      // only right
    } else if (right !== null) {
      max = Math.max(max, val, right + val);
      return Math.max(val, val + right);

      // both leaves are bad
    } else {
      max = Math.max(max, val);
      return val;
    }
  }

  traverse(root);

  return max;
};
