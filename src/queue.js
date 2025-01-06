const {
  NotImplementedError
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode; // If the queue was empty, head should also point to the first node
    }
  }

  dequeue() {
    if (!this.head) {
      return null; // Queue is empty
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next; // Move head to the next node
    if (!this.head) {
      this.tail = null; // If the queue is now empty, set tail to null as well
    }
    return dequeuedValue;
  }

  getUnderlyingList() {
    return this.head; // Return the head of the linked list
  }
}

module.exports = {
  Queue
};