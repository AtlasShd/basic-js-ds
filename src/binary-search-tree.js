const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.main = null;
	}

	root() {
		return this.main;
	}

	add(data) {
		const node = new Node(data);

		if (!this.main) {
			this.main = node;
			return;
		}

		putAfter(this.main);

		function putAfter(child) {
			if (node.data > child.data) {
				if (!child.right) {
					child.right = node;
				} else {
					putAfter(child.right);
				}
			} else {
				if (!child.left) {
					child.left = node;
				} else {
					putAfter(child.left);
				}
			}
		}
	}

	has(data) {
		return this.find(data) ? true : false;
	}

	find(data) {
		if (!this.main) {
			return;
		}

		return runTree(this.main);

		function runTree(child) {
			if (data === child.data) {
				return child;
			} else {
				if (data > child.data) {
					return child.right ? runTree(child.right) : null;
				} else {
					return child.left ? runTree(child.left) : null;
				}
			}
		}
	}

	remove(data) {
		if (!this.main) {
			return;
		}
		
		let d = data;

		this.main = checkNode(this.main);

		function checkNode(child) {
			if (d < child.data) {
				child.left = checkNode(child.left);
				return child;
			}
			else if (d > child.data) {
				child.right = checkNode(child.right);
				return child;
			}
			else {
				if (!child.left && !child.right) {
					return;
				} else if (!child.left) {
					return child.right;
				} else if (!child.right) {
					return child.left;
				} else {
					let rightMin = child.right;

					while (rightMin.left) {
						rightMin = rightMin.left;
					}
					child.data = rightMin.data;
					d = rightMin.data;

					child.right = checkNode(child.right);

					return child;
				}
			}
		}
	}

	min() {
		if (!this.main) {
			return;
		}

		return toMin(this.main);

		function toMin(child) {
			return child.left ? toMin(child.left) : child.data;
		}
	}

	max() {
		if (!this.main) {
			return;
		}

		return toMax(this.main);

		function toMax(child) {
			return child.right ? toMax(child.right) : child.data;
		}
	}
}

module.exports = {
	BinarySearchTree
};