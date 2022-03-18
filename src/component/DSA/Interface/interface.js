class VirtualUndef {
  constructor(
    message = "Check that all inhereted virtual functions are defined"
  ) {
    this.#message = message;
    this.#time = Date.now();
  }
  toString() {
    return `undefinedVirtual: ${this.#message} - ${this.#time}`;
  }
  #message;
  #time;
}
class Error {
  constructor(message = "") {
    this.#message = message;
    this.#time = Date.now();
  }

  get message() {
    return this.#message;
  }

  get time() {
    return this.#time;
  }

  set message(value) {
    this.#message = value;
  }

  toString() {
    return `${this.#message} - ${this.#time}`;
  }
  #message;
  #time;
}

export default class Interface {
  constructor(max_size = Infinity) {
    this.#MAX_SIZE = typeof max_size === "number" ? max_size : 0;
  }

  get max() {
    return this.#MAX_SIZE;
  }

  set max(value) {
    this.#MAX_SIZE = value;
  }

  /**
   * @virtual
   * @description breaks down Data Structure into an array format
   * @returns Array
   */
  toArr() {
    throw new VirtualUndef(
      `${this.constructor.name} has no implementation of a virtual-inherented method`
    );
  }

  /**
   * Creates an Error with a message to be used as a reason for breaking the app
   * @param {String} message the message for the error
   * @returns {Error} Error instance
   */
  static newErr(message = "Error Building Data Strucuture") {
    return new Error(message);
  }

  #MAX_SIZE;
}
