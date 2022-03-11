export default class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.#value = value;
    this.#left = left;
    this.#right = right;
  }

  /**
   * @property
   * @description Allows access to the right node's reference
   * @returns Node
   */
  get right() {
    return this.#right;
  }

  /**
   * @property
   * @description Allows access to the left node's reference
   * @returns Node
   */
  get left() {
    return this.#left;
  }

  /**
   * @property
   * @description Allows access to the value
   * @returns Node
   */
  get value() {
    return this.#value;
  }

  /**
   * @property
   * @description Modifies the reference to the right node
   * @param {*} value
   */
  set right(value) {
    this.#right = value;
  }

  /**
   * @property
   * @description Modifies the reference to the left node
   * @param {*} value
   */
  set left(value) {
    this.#left = value;
  }

  /**
   * @property
   * @description Modifies the values in this node
   * @param {*} value
   */
  set value(value) {
    this.#value = value;
  }

  //private methods/properties
  #value;
  #left;
  #right;
}
