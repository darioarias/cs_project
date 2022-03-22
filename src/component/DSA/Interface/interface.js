/**
 * Error type which describe an instance when a virtual function is not defined.
 * @param {String} message - optional error to be displayed
 * @returns {VirtualUndef} Error instance
 */
class VirtualUndef {
  constructor(
    message = "Check that all inhereted virtual functions are defined"
  ) {
    this.#message = message;
    this.#time = Date.now();
  }

  /**
   * Breaks down Instance into a string representation
   * @returns {String} String representation of Error
   */
  toString() {
    return `undefinedVirtual: ${this.#message} - ${this.#time}`;
  }

  /**@private @description message to display for error */
  #message;

  /**@private @description time-stamp when error instance was created */
  #time;
}

/**
 * Generic error which allows for overwriting message and keeps track of when it was created.
 * @param {String} message - optional message to be displayed
 * @returns {Error} error instance
 */
class Error {
  constructor(message = "") {
    this.#message = message;
    this.#time = Date.now();
  }

  /**
   * @getter Access the message for this Error instance
   * @returns {String} message of this Instance
   */
  get message() {
    return this.#message;
  }

  /**
   * @getter Access the time-stamp for this Error instance
   * @returns {Number} time-stamp of this Instance
   */
  get time() {
    return this.#time;
  }

  /**
   * @setter Updates the message for this Error Instance
   */
  set message(value) {
    this.#message = value;
  }

  /**
   * Breaks down Error instance to a string representation
   * @method toString
   * @returns {String} String representation of instance
   */
  toString() {
    return `${this.#message} - ${this.#time}`;
  }

  /**@private @description the message for the error instance */
  #message;
  /**@private @description the time stamp for the error instance */
  #time;
}

/**
 * A general interface that all Data Structures must implement, it acts like a contract between the front-end and the back-end
 * @param {Number} max_size The maximum number of elements a data structure can hold
 * @returns {Interface} Interface Instance
 */
export default class Interface {
  constructor(max_size = Infinity) {
    this.#MAX_SIZE = typeof max_size === "number" ? max_size : 0;
  }

  /**
   * @getter Access the maximum number of element a Data Structure can hold
   * @returns {Number} Max number of elements a class can hold
   */
  get max() {
    return this.#MAX_SIZE;
  }

  /**
   * @setter updates the maximum number of elements a Data Structure can hold
   */
  set max(value) {
    this.#MAX_SIZE = value;
  }

  /**
   * @virtual
   * @description breaks down Data Structure into an array format
   * @returns {Array} Elements in Data Structure
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

  /**@private @description The maximum number of elements a Data Strucutre can have at a time */
  #MAX_SIZE;
}
