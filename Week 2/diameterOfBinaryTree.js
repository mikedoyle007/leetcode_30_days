/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;

  const height = node => {
    if (node === null) {
      return 0;
    }

    const lheight = height(node.left);
    const rheight = height(node.right);

    // check diameter passing through current node
    if (lheight + rheight > diameter) {
      diameter = lheight + rheight;
    }

    // return largest height
    return (1 + Math.max(lheight, rheight));
  }

  height(root);

  return diameter;
};
