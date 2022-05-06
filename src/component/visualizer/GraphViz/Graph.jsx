import React, { useState, useEffect, useReducer } from "react";
import Draggable from "react-draggable";
import Xarrow from "react-xarrows";
import { BFS } from "./algorithms/GraphAlgo";
import "./Graph.css";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const Circle = (x, y) => {
  return {
    padding: 0,
    margin: 5,
    width: 50,
    height: 50,
    backgroundColor: "white",
    color: "black",
    borderRadius: "50%",
    border: "1px solid black",
    lineHeight: "50px",
    outlineWidth: 0,
    left: `${x - 25}px`,
    top: `${y - 25}px`,
  };
};

const GraphViz = () => {
  const [adjList, setAdjList] = useState(new Map());
  const [adjListHTML, setAdjListHTML] = useState(new Map());
  const [size, setSize] = useState(0);
  const [path, setPath] = useState([]);
  const [openEdges, setopenEdges] = useState(false);
  const [sourceV, setSourceV] = useState(0);
  const [destV, setDestV] = useState(0);
  const [unweighted, setWeighted] = useState("unweighted");
  const [undirected, setDirected] = useState("undirected");
  const [algoOption, setAlgoOption] = useState("Breath First Search");
  const [node1, setNode1] = useState(0);
  const [node2, setNode2] = useState(0);

  useEffect(() => {
    createGraph();
  }, []);

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleAlgoSelect = (e) => {
    setAlgoOption(e.target.value);
  };

  const handleEdgesOpen = () => {
    setopenEdges(true);
  };

  const handleEdgesClose = () => {
    setopenEdges(false);
    setNode1(0);
    setNode2(0);
  };

  const createGraph = () => {
    setSize(0);
    setAdjList(new Map());
    setAdjListHTML(new Map());
    setPath([]);
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
        <Draggable
          key={i}
          bounds="parent"
          onStop={forceUpdate}
          onDrag={forceUpdate}
        >
          <div
            className={`vertex vertex-${i}`}
            id={`vertex-${i}`}
            style={Circle(x, y)}
          >
            {i}
          </div>
        </Draggable>
      ));
    }
  };

  const addEdge = () => {
    if (node1 != node2 && adjList.has(node1) && adjList.has(node2)) {
      if (!adjList.get(node1).includes(node2))
        adjList.set(node1, [...adjList.get(node1), node2]);
    }
    handleEdgesClose();
  };

  const displayVertex = () => {
    let nodes = [];
    const values = adjListHTML.values();
    let temp = values.next();
    while (!temp.done) {
      nodes.push(temp.value());
      temp = values.next();
    }
    return nodes;
  };

  const displayEdges = () => {
    let edges = [];
    for (let i = 0; i < size; i++) {
      let arr = adjList.get(i);
      if (arr.length === 0) continue;
      for (let j = 0; j < arr.length; j++) {
        edges.push(
          <Xarrow
            key={`edge${i}-${arr[j]}`}
            id={`${i}-${arr[j]}`}
            start={`vertex-${i}`}
            end={`vertex-${arr[j]}`}
            color="black"
          ></Xarrow>
        );
      }
    }
    return edges;
  };

  const visualize = () => {
    let visited = null;
    switch (algoOption) {
      case "Breath First Search":
        visited = BFS(sourceV, adjList);
        break;
    }
    visualizePath(visited);
  };

  const visualizePath = (p) => {
    let str = "";
    for (let i of p) {
      str += i.toString() + ", ";
    }
    str = str.slice(0, -2);
    setPath(str);
  };

  return (
    <div>
      <div className="controls">
        <Button
          color="primary"
          variant="outlined"
          onClick={(e) => {
            addVertex(e, size);
            setSize(size + 1);
          }}
        >
          Add Vertex
        </Button>

        <Button variant="outlined" onClick={handleEdgesOpen}>
          Create Edge
        </Button>
        <Dialog open={openEdges} onClose={handleEdgesClose}>
          <DialogTitle>Create Edges</DialogTitle>
          <DialogContent>
            <DialogContentText align="center">
              Connect Two Vertex Together
            </DialogContentText>
            <TextField
              autoFocus
              align="center"
              id="outlined-number"
              label="Vertex 1"
              type="number"
              variant="standard"
              onChange={(e) => {
                setNode1(Number(e.target.value));
              }}
            />
            <TextField
              autoFocus
              align="center"
              id="outlined-number"
              label="Vertex 2"
              type="number"
              variant="standard"
              onChange={(e) => {
                setNode2(Number(e.target.value));
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEdgesClose}>Cancel</Button>
            <Button color="primary" variant="outlined" onClick={addEdge}>
              Add Edge
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        className="canvas"
        onDoubleClick={(e) => {
          addVertex(e, size);
          setSize(size + 1);
        }}
      >
        <div className="graph">
          {displayEdges()}
          {displayVertex()}
        </div>
      </div>
      <div>
        <h6>Path: {path}</h6>
      </div>
      <div className="controls">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-label">Algorithms</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={algoOption}
            label="Algorithms"
            onChange={handleAlgoSelect}
          >
            <MenuItem value={"Breath First Search"}>
              Breath First Search
            </MenuItem>
          </Select>
        </FormControl>
        <Button color="primary" variant="outlined" onClick={visualize}>
          Visualize Path
        </Button>
        <Button color="primary" variant="outlined" onClick={createGraph}>
          Reset
        </Button>
      </div>
      <div className="controls">
        <TextField 
          autoFocus
          align="center"
          id="outlined-number"
          label="Source Vertex"
          type="number"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setSourceV(Number(e.target.value));
          }}
        />
        <TextField
          autoFocus
          align="center"
          id="outlined-number"
          label="Destination Vertex"
          type="number"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setDestV(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default GraphViz;
