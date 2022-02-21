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
   * @description this methods converts the node from a class to a string-html representation
   * @returns {String} a string html representation of this node
   */
  toString() {
    return this.#toHtml();
  }

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
  #toHtml() {
    console.log("hello fron doublylinkedlist");
  }

  /**@private @description the reference to the previous node */
  #previous;
}
