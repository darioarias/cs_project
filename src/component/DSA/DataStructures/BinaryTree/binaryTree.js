import { default as Node } from "../Nodes/binaryTreeNode.js";
import { default as Queue } from "../Queue/queue";

export default class BinaryTree {
  constructor() {
    this.#root = null;
  }

  get root() {
    return this.#root;
  }

  set root(value) {
    this.#root = value;
  }

  add(value) {
    if (!this.#root) {
      this.#root = new Node(value);
      return;
    }
    const queue = new Queue(this.#root);
    while (!queue.isEmpty()) {
      const current_node = queue.dequeue();

      if (current_node.left) queue.enqueue(current_node.left);
      else {
        current_node.left = new Node(value);
        return;
      }

      if (current_node.right) queue.enqueue(current_node.right);
      else {
        current_node.right = new Node(value);
        return;
      }
    }
  }

  addLeft(node, value) {
    if (!node || node.left) return;
    node.left = new Node(value);
  }

  addRight(node, value) {
    if (!node || node.right) return;
    node.right = new Node(value);
  }

  // private methods/properties
  #root;
}
