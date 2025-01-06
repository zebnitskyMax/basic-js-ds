const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Initialize an empty array to hold stack elements
  }

  // Adds an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return undefined; // Return undefined if the stack is empty
    }
    return this.items.pop(); // Remove and return the last element from the array
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined; // Return undefined if the stack is empty
    }
    return this.items[this.items.length - 1]; // Return the last element of the array
  }

  // Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0; // Return true if there are no elements
  }

  // Optional: Returns the size of the stack
  size() {
    return this.items.length; // Return the number of elements in the stack
  }
}

module.exports = {
  Stack
};