export default class Edge {
  constructor(source, destination, weight = 0) {
    this.#source = source;
    this.#destination = destination;
    this.#weight = weight;
  }
  get source() {
    return this.#source;
  }
  get destination() {
    return this.#destination;
  }
  get weight() {
    return this.#weight;
  }
  set source(value) {
    this.#source = value;
  }
  set destination(value) {
    this.#destination = value;
  }
  set weight(value) {
    this.#weight = value;
  }
  #source;
  #destination;
  #weight;
}
