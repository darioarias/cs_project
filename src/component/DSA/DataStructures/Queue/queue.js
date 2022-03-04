import { default as List } from "../LinkedList/doublyLinkedList";

export default class Queue {
  constructor(items = []) {
    this.#list = new List();

    if (items && Array.isArray(items))
      items.forEach((item) => this.enqueue(item));
    else if (items) this.enqueue(items);
  }

  /**
   * @description Insert an element at the back of the queue.
   * @param {*} value
   */
  enqueue(value) {
    this.#list.append(value);
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

  toString() {
    return this.#toHtmlString();
  }

  //private methods/properties
  #list;
  #toHtmlString() {
    return "toString not implemented";
  }
}
