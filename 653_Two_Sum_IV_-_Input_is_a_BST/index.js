/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
let arr = [];

var findTarget = function(root, k) {
  arr = [];
  traversal(root);
  for (let i = arr.length - 1; i > 0; i--) {
    let j = i - 1;
    while (arr[i] + arr[j] >= k) {
      if (arr[i] + arr[j] == k) return true;
      j--;
    }
  }
  return false;
};

function traversal(root) {
  if (root == null) return;
  traversal(root.left);
  arr.push(root.val);
  traversal(root.right);
}
