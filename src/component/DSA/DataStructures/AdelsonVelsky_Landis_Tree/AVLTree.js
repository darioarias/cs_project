import { default as Node } from "../Nodes/AVLTreeNode.js";
import { default as BST } from "../BinarySearchTree/binarySearchTree";
import Interface from "../../Interface/interface.js";

export default class AVLTree extends BST {
  constructor(max_size = Infinity) {
    super(max_size);
  }

  /**
   * @method
   * @description Inserts a value into the tree, then re-balances the tree when needed
   * @param {*} value value to be inserted into the tree
   */
  insert(value) {
    /**
     * @description Recursively tries to insert a value
     * @param {Node} node where to begin inserting
     * @param {*} value value to insert
     */
    const helper = (node, value) => {
      if (!node) return new Node(value);
      if (value < node.value) node.left = helper(node.left, value);
      else node.right = helper(node.right, value);

      let balancedNode = this.#balanced(node);
      node.height = Math.max(node.leftHeight, node.rightHeight) + 1;

      return balancedNode;
    };

    if (this.itemsCount >= this.max)
      throw Interface.newErr("AVL Tree has reached its limit");
    this.root = helper(this.root, value);
    this.itemsCount += 1;
  }

  /**
   * @method
   * @description removes a given value from the tree and re-balance the tree if needed.
   * @param {*} value - value to be removed
   */
  remove(value) {
    const helper = (node, value) => {
      if (!node) return null;
      if (value === node.value) {
        if (!node.right && !node.left) return null;
        if (!node.right) return node.left;
        if (!node.left) return node.right;

        node.value = node.right.min.value;
        node.right = helper(node.right, node.value);
      } else if (value < node.value) {
        node.left = helper(node.left, value);
      } else node.right = helper(node.right, value);

      let balancedNode = this.#balanced(node);
      balancedNode.height =
        Math.max(balancedNode.leftHeight, balancedNode.rightHeight) + 1;

      return balancedNode;
    };

    this.root = helper(this.root, value);
    this.itemsCount = Math.max(0, this.itemsCount - 1);
  }

  //private methods / properties
  /**
   * @private
   * @description Decide whether a node requires balancing or not. If so, descides which rotation to balance the tree
   * @param {Node} node
   * @returns {Node} the newly risen node
   */
  #balanced(node) {
    switch (node.balanceFactor) {
      case 2:
        if (node.left && node.left.balanceFactor === -1)
          return this.#leftRightRotate(node);
        return this.#rightRotate(node);
      case -2:
        if (node.right && node.right.balanceFactor === 1)
          return this.#rightLeftRotate(node);
        return this.#leftRotate(node);
      default:
        return node;
    }
  }

  /**
   * @private
   * @description takes a node and rotates it left
   * @param {Node} node
   * @returns {Node} the newly risen node
   */
  #leftRotate(node) {
    let pivot = node.right;

    node.right = pivot.left;
    pivot.left = node;
    node.height = Math.max(node.leftHeight, node.rightHeight) + 1;
    pivot.height = Math.max(pivot.leftHeight, pivot.rightHeight) + 1;

    return pivot;
  }

  /**
   * @private
   * @description takes a node and rotates it right
   * @param {Node} node
   * @returns {Node} the newly risen node
   */
  #rightRotate(node) {
    let pivot = node.left;
    node.left = pivot.right;
    pivot.right = node;

    pivot.height = Math.max(pivot.leftHeight, pivot.rightHeight) + 1;
    node.height = Math.max(node.leftHeight, node.rightHeight) + 1;

    return pivot;
  }

  /**
   * @private
   * @description performs a rigth rotation on the given node then a left rotation on the newly risen node
   * @param {Node} node reference to node that will be updated
   * @returns the newly risen node
   */
  #rightLeftRotate(node) {
    if (!node.right) return node;
    node.right = this.#rightRotate(node.right);
    return this.#leftRotate(node);
  }

  /**
   * @private
   * @description performs a left rotation on the given node then a right rotation on the newly risen node
   * @param {Node} node reference to node that will be updated
   * @returns {Node} the newly risen node
   */
  #leftRightRotate(node) {
    if (!node.left) return node;
    node.left = this.#leftRotate(node.left);
    return this.#rightRotate(node);
  }
}
