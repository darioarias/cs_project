import { default as List } from "../LinkedList/doublyLinkedList";
import { default as Interface } from "../../Interface/interface.js";

export default class Queue extends Interface {
  constructor(items = [], maxLength = Infinity) {
    super(maxLength);
    this.#list = new List(null, maxLength);

    if (items && Array.isArray(items))
      items.forEach((item) => this.enqueue(item));
    else if (items) this.enqueue(items);
  }

  /**
   * @description Insert an element at the back of the queue.
   * @param {*} value
   */
  enqueue(value) {
    try {
      this.#list.append(value);
      return true;
    } catch (e) {
      throw Interface.newErr("Queue has reached its max-size");
    }
  }

  /**
   * @description Remove the element at the front of the queue and return it.
   * @param {*} value
   * @returns Node
   */
  dequeue() {
    return this.#list.pop();
  }

  /**
   * @description Check if the queue is empty.
   * @param {*} value
   * @returns Boolean
   */
  isEmpty() {
    return this.#list.isEmpty();
  }

  /**
   * @description Return the element at the front of the queue without removing it.
   * @param {*} value
   * @returns Node or Null
   */
  peek() {
    return this.#list.head ? this.#list.head.value : null;
  }

  static get __type() {
    return "Queue";
  }

  toArr() {
    return this.#list.toArr();
  }

  getLength(){
    return this.#list.toArr().length;
  }

  //private methods/properties
  #list;
}
