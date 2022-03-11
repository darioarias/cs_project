import { default as BTNode } from "./binaryTreeNode";

export default class BinarySearchTreeNode extends BTNode {
  constructor(value, left = null, right = null) {
    super(value, left, right);
  }

  /**
   * @method
   * @description searches for the smallest value in a chain
   * @return {BinarySearchTreeNode} smallest node in a sub-tree
   */
  get min() {
    return this.left ? this.left.min : this;
  }
}
