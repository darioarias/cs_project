// const { SinglyLinkedListNode } = requrie("./singlyLinkedListNode.js");
import { default as SinglyLinkedListNode } from "./singlyLinkedListNode";

export default class DoublyLinkedListNode extends SinglyLinkedListNode {
  /**
   * @param {*} value
   * @param {*} next
   * @param {*} previous
   * @description constructor for the DoublyLinkedListNode class
   * @return an instance of a DoublyLinkedListNode
   */
  constructor(value, next = null, previous = null) {
    super(value, next);
    this.#previous = previous;
  }

  /**
   * @property
   * @description allows access to the previous-node's reference. Updates the reference of the previous node
   */
  get previous() {
    return this.#previous;
  }

  set previous(value) {
    this.#previous = value;
  }

  //main interface

  /**
   * @static
   * @description a way to check the type of node this is
   * @returns {String} type of this Node
   */
  static get __type() {
    return "Doubly_List_Node";
  }

  //Private props/fields
  /**@private @description helper method to convert this node into an HTML String */

  /**@private @description the reference to the previous node */
  #previous;
}
