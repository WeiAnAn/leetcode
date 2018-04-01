/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var first;
  var nextValue = 0;
  try {
    l1.val;
  } catch (err) {
    l1 = new ListNode(0);
  }
  try {
    l2.val;
  } catch (err) {
    l2 = new ListNode(0);
  }
  var result = new ListNode((l1.val + l2.val + nextValue) % 10);
  nextValue = l1.val + l2.val + nextValue >= 10 ? 1 : 0;
  first = result;
  l1 = l1.next;
  l2 = l2.next;
  while (l1 !== null || l2 !== null || nextValue === 1) {
    try {
      l1.val;
    } catch (err) {
      l1 = new ListNode(0);
    }
    try {
      l2.val;
    } catch (err) {
      l2 = new ListNode(0);
    }

    result.next = new ListNode((l1.val + l2.val + nextValue) % 10);
    nextValue = l1.val + l2.val + nextValue >= 10 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;
    result = result.next;
  }
  return first;
};
