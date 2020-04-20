/* Construct Binary Search Tree from Preorder Traversal */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const root = new TreeNode(preorder[0]);

  const insert = (node, val) => {
    if (val < node.val) {
      // search left
      if (node.left) {
        insert(node.left, val);
      } else {
        node.left = new TreeNode(val);
      }
    } else if (val > node.val) {
      // search right
      if (node.right) {
        insert(node.right, val);
      } else {
        node.right = new TreeNode(val);
      }
    }
  }

  for (let i = 1; i < preorder.length; i++) {
    insert(root, preorder[i]);
  }

  return root;
};
