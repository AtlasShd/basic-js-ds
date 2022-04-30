const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

	constructor() {
		this.main = null;
		this.last = null;
	}

	getUnderlyingList() {
		return this.main;
	}

	enqueue(value) {
		const listNode = new ListNode(value);

		if (!this.main) {
			this.main = listNode;
			this.last = listNode;
		} else {
			this.last.next = listNode;
			this.last = listNode;
		}
	}

	dequeue() {
		const firstElem = this.main.value;

		this.main = this.main.next;
		return firstElem;
	}
}

module.exports = {
	Queue
};
