import { default as Node } from "../Nodes/binarySearchTreeNode";
import { default as Queue } from "../Queue/queue";
import { default as Interface } from "../../Interface/interface";

/**
 * Creates a Binary Search Tree (BST) Instance and manages data manipulation
 * @param {Number} max_size {optional} Maximum number of element this tree can hold
 * @returns {BinarySearchTree} Instance of tree
 * @extends {Interface} Contract between Front-end and Back-end
 */
export default class BinarySearchTree extends Interface {
  constructor(max_size = Infinity) {
    super(max_size);
    this.#root = null;
    this.#items = 0;
  }

  /**
   * @getter The number of elements currently in the tree
   * @returns {Number} Number of Elements in Tree
   */
  get itemsCount() {
    return this.#items;
  }

  /**
   * @setter Updates the number of elements in the Tree
   */
  set itemsCount(value) {
    this.#items = value;
  }

  /**
   * @property
   * @description Access the root of the tree
   * @returns {Node} root reference
   */
  get root() {
    return this.#root;
  }

  /**
   * @property
   * @description Modifies the root of the tree
   */
  set root(value) {
    this.#root = value;
  }

  /**
   * @method
   * @description checks if a value is found within the tree
   * @param {*} value
   * @returns {Boolean} wether the value is in the tree
   */
  contains(value) {
    const helper = (node) => {
      if (!node) return false;
      if (node.value === value) return true;
      if (value < node.value) return helper(node.left);
      else return helper(node.right);
    };

    return helper(this.#root);
  }

  /**
   * @method
   * @description inserts a value into the tree
   * @param {*} value
   */
  insert(value) {
    const helper = (node) => {
      if (!node) {
        this.#items += 1;
        return new Node(value);
      }
      if (value < node.value) node.left = helper(node.left);
      else node.right = helper(node.right);
      return node;
    };
    if (this.#items >= this.max)
      throw Interface.newErr("Binary Tree cannot hold any more values");
    this.#root = helper(this.#root);
  }

  /**
   * @method
   * @description removes a value from the tree
   * @param {*} value
   */
  remove(value) {
    const helper = (node, value) => {
      if (!node) return null;
      if (value === node.value) {
        this.#items -= 1;
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        node.value = node.right.min.value;
        node.right = helper(node.right, node.value);
      } else if (value < node.value) {
        node.left = helper(node.left, value);
      } else node.right = helper(node.right, value);
      return node;
    };
    this.#root = helper(this.#root, value);
  }

  toArr() {
    const queue = new Queue(this.#root);
    const result = [];
    let current;
    while ((current = queue.dequeue())) {
      result.push(current);

      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }

    return result;
  }

  /**
   * @method
   * Prints a string representation of this tree instance
   */
  print() {
    console.log(this.#toString(this.#root));
  }

  //privates properties/methods
  /**@private Holds a reference to the root of this tree  */
  #root;

  /**@private Keeps track of the number of elements in this tree */
  #items;

  /**
   * Creates a string representation of a Binary tree
   * @param {Node} node root where to start building string representation of tree
   * @returns {String} Representation of Binary tree
   */
  #toString(node, top = "", root = "", bottom = "") {
    if (!node) return `${root}null\n`;
    if (!node.left && !node.right) return `${root}${node.value}\n`;

    return (
      this.#toString(node.right, top + "   ", top + "┌", top + " │ ") +
      `${root}${node.value}\n` +
      this.#toString(node.left, bottom + " │ ", bottom + "└", bottom + "   ")
    );
  }
}
