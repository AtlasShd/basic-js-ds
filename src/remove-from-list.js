'use strict';

const { NotImplementedError } = require('../extensions/index.js');

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

// class ListNode {
// 	constructor(x) {
// 		this.value = x;
// 		this.next = null;
// 	}
// }

// function convertArrayToList(arr) {
// 	return arr.reverse().reduce((acc, cur) => {
// 		if (acc) {
// 			const node = new ListNode(cur);
// 			node.next = acc;
// 			return node;
// 		}

// 		return new ListNode(cur);
// 	}, null);
// }

// let i = removeKFromList(convertArrayToList([3, 3, 3, 3, 4, 5]), 3);
// console.log(123,i, 123);

function removeKFromList(l, k) {
	if (!l) {
		return;
	}

	return checkNext(l);

	function checkNext(data) {
		if (data.value === k) {
			if (data.next) {
				data.next = checkNext(data.next);
			}
			return data.next;
		} else {
			if (data.next) {
				data.next = checkNext(data.next);
			}
			return data;
		}
	}
}

module.exports = {
	removeKFromList
};
