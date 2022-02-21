export default class SinglyLinkedListNode {
  /**
   * @description Creates a SinglyLinkedList Node
   * @param {*} value
   * @param {*} next
   * @returns {SinglyListNode} A Singly list instance, of type 'Singly_List_Node'
   */
  constructor(value, next = null) {
    this.#value = value;
    this.#next = next;
  }

  //Getters
  /**
   * @property
   * @description allows access to the value of this node
   */
  get value() {
    return this.#value;
  }

  /**
   * @property
   * @description allows access to the next-node's reference
   */
  get next() {
    return this.#next;
  }

  //Setters
  /**
   * @property
   * @param {*} value
   * @description Updates the value of this node
   */
  set value(value) {
    this.#value = value;
  }

  /**
   * @property
   * @param {*} value
   * @description Updates the reference of the next's node
   */
  set next(value) {
    this.#next = value;
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
    return "Singly_List_Node";
  }

  //Private props/fields
  /**@private @description helper method to convert this node into an HTML String */
  #toHtml() {
    return `<div class="jsavnode jsavlistnode"> 
              <span class="jsavvalue">
                <span class="jsavvaluelabel">${this.#value}</span>
              </span>
              <span class="jsavpointerarea"></span>
            </div>`;
  }
  /**@private @description the value of this node */
  #value;

  /**@private @description the reference to the next node */
  #next;
}
