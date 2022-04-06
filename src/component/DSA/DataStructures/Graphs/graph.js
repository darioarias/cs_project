import { default as Vertex } from "./vertex";
import { default as Edge } from "./edge";
import { default as Interface } from "../../Interface/interface";
import { default as Enums } from "./enums";

const { EdgeType } = Enums;

export default class Graph extends Interface {
  constructor() {
    super();
  }

  /**
   * Creates a vertex and adds it to the graph.
   * @param {*} data to be added
   * @returns {Vertex} newly added vertex
   */
  createVertex(data) {
    // const vertex = new Vertex(this.count, data);
    // this.#adj_list[vertex] = [];
    // return vertex;
  }

  /**
   * Adds a directed edge between two vertices.
   * @param {Vertex} source from where the the connection starts
   * @param {Vertex} destination where the connection ends
   * @param {Number} weight the weight of the connection
   */
  addDirectedEdge(source, destination, weight) {}

  /**
   * Returns a list of outgoing edges from a specific vertex.
   * @param {Vertex} source from where the the connection starts
   * @returns {[Edge]} edges for a vertex
   */
  edges(source) {}

  /**
   * Returns the weight of the edge between two vertices.
   * @param {Vertex} source from where the the connection starts
   * @param {Vertex} destination where the connection ends
   * @returns {Number} the weight associated with an edge
   */
  weight(source, destination) {}

  /**
   * Adds an undirected (or bi-directional) edge between two vertices.
   * @param {Vertex} source from where the the connection starts
   * @param {Vertex} destination where the connection ends
   * @param {Number} weight the weight of the connection
   * @returns {Boolean} Boolean indicating wether or not the edge was added
   */
  addUndirectedEdge(source, destination, weight) {
    this.addDirectedEdge(source, destination, weight);
    this.addDirectedEdge(destination, source, weight);
    return true;
  }

  /**
   * Uses EdgeType to add either a directed or undirected edge between two vertices.
   * @param {String} edge_type the type of graph
   * @param {Vertex} source from where the the connection starts
   * @param {Vertex} destination where the connection ends
   * @param {Number} weight the weight of the connection
   */
  add(edge_type, source, destination, weight = 0) {
    switch (EdgeType.get_member(edge_type)) {
      case "UNDIRECTED":
        this.addUndirectedEdge(source, destination, weight);
        break;
      case "DIRECTED":
        this.addDirectedEdge(source, destination, weight);
        break;
      default:
        throw Interface.newErr("Graph Type not regconized");
    }
  }
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
