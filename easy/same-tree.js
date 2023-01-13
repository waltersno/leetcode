/**
 * Definition for a binary tree node.

 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (leftNode, rightNode) {
  if (leftNode == null && rightNode == null) return true;
  if (leftNode == null || rightNode == null) return false;
  if (leftNode.val !== rightNode.val) return false;

  return (
    isSameTree(leftNode.left, rightNode.left) &&
    isSameTree(leftNode.right, rightNode.right)
  );
};
