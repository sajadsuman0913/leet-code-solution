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
 * @param {number} targetSum
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val);
 * this.left = (left===undefined ? null : left);
 * this.right = (right===undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = (root, targetSum) => {
        if (!root) {
        return false;
    }

    const remainingSum = targetSum - root.val;

    if (!root.left && !root.right) {
        return remainingSum === 0;
    }

    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};