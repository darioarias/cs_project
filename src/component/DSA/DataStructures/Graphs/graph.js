import { default as Vertex } from "./vertex";
class EdgeType {
  static UNDIRECTED = new EdgeType("undirected");
  static DIRECTED = new EdgeType("directed");
  constructor(name) {
    this.name = name;
  }

  static belongs(value) {
    return value.toUpperCase() in this;
  }

  toString() {
    return `${this.name.toUpperCase()}`;
  }

  static toString() {
    return "Edge_Enum";
  }
}

export default class Graph {
  constructor() {
    console.log(EdgeType.toString());
  }
  /**
   *
   * @param {*} data
   */
  createVertex(data) {}

  /**
   *
   * @param {*} source
   * @param {*} destination
   * @param {*} weight
   */
  addDirectedEdge(source, destination, weight) {}

  /**
   *
   * @param {*} source
   * @param {*} destination
   * @param {*} weight
   */
  addUndirectedEdge(source, destination, weight) {}

  /**
   *
   * @param {*} edge
   * @param {*} source
   * @param {*} destination
   * @param {*} weight
   */
  add(edge, source, destination, weight) {}

  /**
   *
   * @param {*} source
   */
  edges(source) {}

  /**
   *
   * @param {*} source
   * @param {*} destination
   */
  weight(source, destination) {}
}

/**
 * 

  func createVertex(data: Element) -> Vertex<Element>
  func addDirectedEdge(from source: Vertex<Element>, to destination: Vertex<Element>, weight: Double?)
  func addUndirectedEdge(between source: Vertex<Element>, and destination: Vertex<Element>, weight: Double?)
  func add(_ edge: EdgeType, from source: Vertex<Element>, to destination: Vertex<Element>, weight: Double?)
  func edges(from source: Vertex<Element>) -> [Edge<Element>]
  func weight(from source: Vertex<Element>, to destination: Vertex<Element>) -> Double?
 */
