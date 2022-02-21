import { default as Node } from "../Nodes/singlyLinkedListNode";

export default class SinglyLinkedList {
  /**
   * @description creates an instance of SinglyLinedList and returns a reference
   * @param {*} head optional value to start the list.
   * @returns {SinglyLinkedList}
   */
  constructor(head = null) {
    this.#head = this.#validate_node(head);
    this.#tail = this.#head;
  }

  /**
   * @property
   * @description returns a reference to the head--first node--of the list
   * @return {Node}
   */
  get head() {
    return this.#head;
  }

  /**
   * @property
   * @description returns a reference to the tail--last node--of the list
   * @return {Node}
   */
  get tail() {
    return this.#tail;
  }

  /**
   * @description Adds a value at the front of the list
   * @param {*} value
   */
  push(value) {}

  /**
   * @description Adds a value at the end of the list
   * @param {*} value
   */
  append(value) {}

  /**
   * @description Adds a value after a particular list node
   * @param {*} after_node_
   */
  insert(after_node_) {}

  /**
   * @description Removes the value at the front of the list.
   */
  pop() {}

  /**
   * @description Removes the value at the end of the list.
   */
  removeLast() {}

  /**
   * @description Removes a value anywhere in the list.
   * @param {Number} at_index
   */
  remove(at_index) {}

  /**
   * @static
   * @description a way to check the type of list this is
   * @returns {String} type of this List
   */
  static get __type() {
    return "Singly_Linked_list";
  }

  //private properties / methods
  #head;
  #tail;
  #beforeTail() {
    if (!this.#head) return null;
    if (!this.#head.next) return this.#head;

    let current = this.#head;
    while (current.next.next) current = current.next;

    return current;
  }
  #validate_node(value) {
    if ((value || value === 0) && value.__type !== Node.__type)
      return new Node(value);
    return value;
  }
}
