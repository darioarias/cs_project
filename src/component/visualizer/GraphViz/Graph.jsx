import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./Graph.css";

const Circle = (x, y) => {
    return {
        padding: 0,
        margin: 5,
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: "1px solid black",
        alignItems: "center",
        lineHeight: "50px",
        outlineWidth: 0,
        justifyContent: "center",
        left: `${x - 25}px`,
        top: `${y - 25}px`,
    }
}

const GraphViz = () => {
  const [adjList, setAdjList] = useState([]);
  const [adjListHTML, setAdjListHTML] = useState([]);
  const [size, setSize] = useState(0);
  const [unweighted, setWeighted] = useState("unweighted");
  const [undirected, setDirected] = useState("undirected");
  const [algoOption, setAlgoOption] = useState("Dijkstra");

  useEffect(() => {
    createGraph();
  }, []);

  const createGraph = () => {
    setSize(0);
    let adj = new Map();
    setAdjList(adj);
    setAdjListHTML(adj);
  };

  const getCoordinates = (e) => {
    let x = e.target;
    let dim = x.getBoundingClientRect();
    return [e.clientX - dim.left, e.clientY - dim.top];
  };

  const addVertex = (e, i) => {
    if (!adjList.has(i)) {
      adjList.set(i, []);
      let [x, y] = getCoordinates(e);
      adjListHTML.set(i, () => (
        <Draggable key={i} bounds="parent">
          <div className={`vertex vertex-${i}`} id={`vertex-${i}`}
          style = {Circle(x, y)}>
              {i}
          </div>
        </Draggable>
      ));
    }
  };

  const addEdge = () => {};

  const display = () => {
    let nodes = [];
    const values = adjListHTML.values();
    let res = values.next();
    while(!res.done) {
        nodes.push(res.value());
        res = values.next();
    }
    return nodes;
  };

  return (
      
    <div
      className="canvas"
      onDoubleClick={(e) => {
        addVertex(e, size);
        setSize(size + 1);
      }}
    >
      <div className="graph">
          {display()}
      </div>
    </div>
  );
};

export default GraphViz;
