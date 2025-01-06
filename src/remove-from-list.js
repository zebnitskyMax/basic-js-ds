const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // Create a dummy node that points to the head of the list
  let dummy = new NotImplementedError(0);
  dummy.next = l;

  // Initialize current and previous pointers
  let current = dummy;

  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with the value k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the new head of the list, which is the next of the dummy node
  return dummy.next;
}

module.exports = {
  removeKFromList
};