import { default as Node } from "../Nodes/binaryTreeNode.js";
import { default as Queue } from "../Queue/queue";
import { default as Interface } from "../../Interface/interface.js";

// const {}

export default class BinaryTree extends Interface {
  constructor(max_length = Infinity) {
    super(max_length);
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

  height(node)
  {
    if (node == null)
      return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  levelTreeOrder(node = this.#root)
  {
    if (!this.root) return [];

    const levels = []
    const q = [this.#root]
    while (q.length){
      const length = q.length
      const level = []
      for (var i = 0; i < length; i++)
      {
        const node = q.shift();
        level.push(node.value);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      levels.push(level);
    }
    return levels;
  }

  // private methods/properties
  #root;
}
