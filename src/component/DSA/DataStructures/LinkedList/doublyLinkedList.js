import { default as SinglyLinkedList } from "./singlyLinkedList";
import { default as Node } from "../Nodes/doublyLinkedListNode";

export default class DoublyLinkedList extends SinglyLinkedList {
  /**
   * @description creates an instance of SinglyLinedList and returns a reference
   * @param {*} head optional value to start the list.
   * @returns {DoublyLinkedList}
   */
  constructor(head = null, maxLength = Infinity) {
    super(head, maxLength);
    this.#length = 0;
  }

  push(value) {
    if (this.#length >= this.max)
      throw this.makeErr("List has reached it's max-length");

    const tempNode = new Node(value, this.head);
    this.#length += 1;
    if (!this.head) {
      this.head = tempNode;
      this.tail = this.head;
      return;
    }
    this.head.previous = tempNode;
    this.head = tempNode;
  }

  append(value) {
    if (this.#length >= this.max)
      throw this.makeErr("List has reached it's max-length");

    if (!this.tail) {
      return this.push(value);
    }

    this.#length += 1;
    const tempNode = new Node(value, null, this.tail);
    this.tail.next = tempNode;
    this.tail = tempNode;
  }

  insert(after_node, value) {
    if (this.#length >= this.max)
      throw this.makeErr("List has reached it's max-length");

    if (after_node === this.tail) return this.append(value);

    this.#length += 1;
    const tempNode = new Node(value, after_node.next, after_node);
    let next = after_node.next;
    next.previous = tempNode;
    after_node.next = tempNode;
  }

  pop() {
    if (!this.head) return null;
    const { value } = this.head;
    this.#length -= 1;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return value;
    }
    this.head = this.head.next;
    this.head.previous = null;
    return value;
  }

  removeLast() {
    if (!this.tail) return null;
    const { value } = this.tail;
    this.#length -= 1;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return value;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
    return value;
  }

  remove(at_index) {
    if (at_index === 0) return this.pop();
    for (
      let current = this.head, index = 0;
      current;
      current = current.next, index++
    ) {
      if (index === at_index) {
        if (current === this.tail) return this.removeLast();
        const { value } = current;
        let prev = current.previous;
        prev.next = current.next;
        current.next = current.next ? prev : null;
        this.#length -= 1;
        return value;
      }
    }
    return null;
  }

  /**
   * @static
   * @description a way to check the type of list this is
   * @returns {String} type of this List
   */
  static get __type() {
    return "Doubly_Linked_List";
  }

  //private properties / methods
  #length = 0;
}
