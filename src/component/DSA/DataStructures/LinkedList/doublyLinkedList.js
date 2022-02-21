import { default as SinglyLinkedList } from "./singlyLinkedList";
import { default as Node } from "../Nodes/doublyLinkedListNode";

export default class DoublyLinkedList extends SinglyLinkedList {
  /**
   * @description creates an instance of SinglyLinedList and returns a reference
   * @param {*} head optional value to start the list.
   * @returns {DoublyLinkedList}
   */
  constructor(head = null) {
    super(head);
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
}
