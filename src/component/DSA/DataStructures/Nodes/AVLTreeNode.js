import { default as BSTNode } from "./binarySearchTreeNode";

export default class AVLTreeNode extends BSTNode {
  constructor(value, left = null, right = null) {
    super(value, left, right);
    this.#height = 0;
  }
  /**
   * @property
   * @description access the height of a node
   * @returns {Number} height of node
   */
  get height() {
    return this.#height;
  }

  /**
   * @property
   * @description modifies the height of a node
   */
  set height(value) {
    this.#height = value;
  }

  /**
   * @property
   * @description calculates the left-node's height
   * @returns {Number} height of left node
   */
  get leftHeight() {
    return this.left ? this.left.height : -1;
  }

  /**
   * @property
   * @description calculates the right-node's height
   * @returns {Number} height of right node
   */
  get rightHeight() {
    return this.right ? this.right.height : -1;
  }

  /**
   * @property
   * @description calculates the balancing factor of a given node
   * @returns {Number} balancing factor
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  /** @private @description hold the value for the height of a given node within a tree */
  #height;
}
