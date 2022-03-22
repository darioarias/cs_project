import { default as Node } from "../Nodes/binaryTreeNode.js";
import { default as Queue } from "../Queue/queue";
import { default as Interface } from "../../Interface/interface.js";

/**
 * Creates a basic Binary Tree (BT) and manages inserting data
 * @param {Number} max_size {optional} Maximum number of element this tree can hold
 * @returns {BinaryTree} Binary Tree Instance
 * @extends {Interface} Contract between Front-end and Back-end
 */
export default class BinaryTree extends Interface {
  constructor(max_length = Infinity) {
    super(max_length);
    this.#root = null;
    this.#items = 0;
  }

  /**
   * @getter access the reference to the root
   * @returns {Node} Root Instance
   */
  get root() {
    return this.#root;
  }

  /**
   * @setter updates the reference to the root of the tree
   */
  set root(value) {
    this.#root = value;
  }

  /**
   * @method
   * Inserts a value into the tree at the first open spot (first node missing a left or right child)
   * @param {*} value to be inserted into the tree
   */
  add(value) {
    if (this.#items >= this.max)
      throw Interface.newErr("Binary Tree has reached it max-length");

    if (!this.#root) {
      this.#items += 1;
      this.#root = new Node(value);
      return;
    }

    const queue = new Queue(this.#root);
    while (!queue.isEmpty()) {
      const current_node = queue.dequeue();

      if (current_node.left) queue.enqueue(current_node.left);
      else {
        this.#items += 1;
        current_node.left = new Node(value);
        return;
      }

      if (current_node.right) queue.enqueue(current_node.right);
      else {
        this.#items += 1;
        current_node.right = new Node(value);
        return;
      }
    }
  }

  /**
   * Inserts a value to the left of a given node provided that node.left is null
   * @param {Node} node The parent for the new value
   * @param {*} value that will be inserted
   */
  addLeft(node, value) {
    if (!node || node.left) return;
    node.left = new Node(value);
  }

  /**
   * Inserts a value to the right of a given node provided that node.right is null
   * @param {Node} node The parent for the new value
   * @param {*} value that will be inserted
   */
  addRight(node, value) {
    if (!node || node.right) return;
    node.right = new Node(value);
  }

  /**
   * Recursively checks the hight of a node
   * @param {Node} node for which the height will be calculated
   * @returns {Number} the hight of a given node
   */
  height(node) {
    if (node == null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // levelTreeOrder(node = this.#root) {
  //   if (!this.root) return [];

  //   const levels = [];
  //   const q = [this.#root];
  //   while (q.length) {
  //     const length = q.length;
  //     const level = [];
  //     for (var i = 0; i < length; i++) {
  //       const node = q.shift();
  //       level.push(node.value);
  //       if (node.left) q.push(node.left);
  //       if (node.right) q.push(node.right);
  //     }
  //     levels.push(level);
  //   }
  //   return levels;
  // }

  /**
   * Builds a representation of the tree as a Array of Array which groups elements by depth
   * @param {Node} node {Optional} node where to start representation
   * @returns {[Array]} array representation of tree
   */
  toArr(node = this.#root) {
    if (!node) return [];
    let els_at_height = {},
      queue = new Queue({ height: 0, node });

    while (!queue.isEmpty()) {
      let {
        height,
        node: { value, left, right },
      } = queue.dequeue();

      if (!(height in els_at_height)) els_at_height[height] = [];
      els_at_height[height].push(value);

      if (left) queue.enqueue({ height: height + 1, node: left });
      if (right) queue.enqueue({ height: height + 1, node: right });
    }

    let levels = [];
    for (let i = 0; i in els_at_height; i++) levels.push(els_at_height[i]);
    return levels;
  }

  // private methods/properties
  /**@private Holds a reference to the root of the tree */
  #root;

  /**@private Keeps track of the number of elements in the tree */
  #items;
}
