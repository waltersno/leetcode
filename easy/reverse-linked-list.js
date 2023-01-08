// link: https://leetcode.com/problems/reverse-linked-list/description/

const helper = function (head, prevNode = null) {
  if (!head) {
    return null;
  }
  let nextNode = head?.next;
  if (prevNode) {
    head.next = prevNode;
  } else {
    head.next = null;
  }
  if (!nextNode) return head;

  return helper(nextNode, head);
};

var reverseList = function (head) {
  return helper(head);
};
