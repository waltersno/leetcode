/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  if (head?.next?.val === head.val) {
    head.next = head.next.next;
    head = deleteDuplicates(head);
  } else {
    head.next = deleteDuplicates(head.next);
  }

  return head;
};
