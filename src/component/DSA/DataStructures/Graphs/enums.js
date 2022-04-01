class EdgeType {
  static UNDIRECTED = new EdgeType("undirected");
  static DIRECTED = new EdgeType("directed");
  constructor(name) {
    this.name = name;
  }

  static isMemberOf(value) {
    if (typeof value !== "string") return false;
    return value.toUpperCase() in this;
  }

  static get_member(value) {
    if (!EdgeType.isMemberOf(value)) return null;
    return this[value.toUpperCase()].toString();
  }

  toString() {
    return `${this.name.toUpperCase()}`;
  }

  static toString() {
    return "Edge_Enum";
  }
}

export default { EdgeType };
