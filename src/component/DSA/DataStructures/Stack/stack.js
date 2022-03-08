import { default as List } from "../LinkedList/doublyLinkedList";
import { default as Interface } from "../../Interface/interface.js";

export default class Stack extends Interface {
  constructor(items = [], maxLength = 5) {
    super(maxLength);
    this.#list = new List(null, maxLength);
    if (items && Array.isArray(items)) items.forEach((item) => this.push(item));
    else if (items) this.push(items);
  }

  /**
   * @description Adds an element to the top of the stack.
   * @param {*} value
   */
  push(value) {
    try {
      this.#list.append(value);
      return true;
    } catch (e) {
      throw this.makeErr("Stack has reached its max-size");
    }
  }

  /**
   * @description Removes the top element of the stack.
   * @returns the top element of the stack
   */
  pop() {
    return this.#list.removeLast();
  }

  /**
   * @description checks if the stack is emtpy
   * @returns True or False
   */
  isEmpty() {
    return this.#list.isEmpty();
  }

  /**
   * @description Allows access to the top value of the stack
   * @returns Top value, or null
   */
  peek() {
    return this.#list.tail ? this.#list.tail.value : null;
  }

  toArr() {
    return this.#list.toArr();
  }
  /**
   * @static
   * @description a way to check the type identifier
   * @returns {String} class identifier
   */
  static get __type() {
    return "Stack";
  }

  //private method/properties
  #list;
}
