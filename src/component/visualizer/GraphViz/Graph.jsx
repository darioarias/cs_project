import React, { useState, useEffect, useReducer } from "react";
import Draggable from "react-draggable";
import Xarrow from "react-xarrows";
import { BFS, Dijkstra } from "./algorithms/GraphAlgo";
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
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const GraphViz = () => {
  const [adjList, setAdjList] = useState(new Map());
  const [adjListHTML, setAdjListHTML] = useState(new Map());
  const [adjListAlgo, setAdjListAlgo] = useState(new Map());
  const [size, setSize] = useState(0);
  const [path, setPath] = useState([]);
  const [openEdges, setopenEdges] = useState(false);
  const [sourceV, setSourceV] = useState(0);
  const [destV, setDestV] = useState(0);
  const [weighted, setWeighted] = useState(false);
  const [directed, setDirected] = useState(false);
  const [algoOption, setAlgoOption] = useState("Breath First Search");
  const [node1, setNode1] = useState(0);
  const [node2, setNode2] = useState(0);
  const [edgeWeight, setEdgeWeight] = useState(1);
  const [edgeDirection, setEdgeDirection] = useState("->");

  useEffect(() => {
    createGraph();
  }, []);

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleChangeW = (e) => {
    setWeighted(e.target.checked);
    createGraph();
  };

  const handleChangeD = (e) => {
    setDirected(e.target.checked);
    createGraph();
  };

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
    setEdgeWeight(1);
    setEdgeDirection("->");
  };

  const createGraph = () => {
    setSize(0);
    setAdjList(new Map());
    setAdjListHTML(new Map());
    setAdjListAlgo(new Map());
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
      adjListAlgo.set(i, []);
      let [x, y] = getCoordinates(e);
      adjListHTML.set(i, () => (
        <Draggable
          key={i}
          bounds="parent"
          onStop={forceUpdate}
          onDrag={forceUpdate}
        >
          <div style={{ width: "50px", height: "50px" }}>
            <div
              id={`weight-${i}`}
              style={{ width: "50px", height: "25px", color: "blue" }}
            >
              Infinity
            </div>
            <div
              className={`vertex vertex-${i}`}
              style={{
                width: "50",
                height: "50",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                border: "1px solid black",
                lineHeight: "50px",
              }}
              id={`vertex-${i}`}
            >
              {i}
            </div>
          </div>
        </Draggable>
      ));
    }
  };

  function Edge(node, weight, direction) {
    this.node = node;
    this.weight = weight;
    this.direction = direction;
  }

  function WeightedEdge(node, weight) {
    this.node = node;
    this.weight = weight;
  }

  const addEdge = () => {
    if (node1 != node2 && adjList.has(node1) && adjList.has(node2)) {
      if (!weighted && !directed) {
        if (!adjList.get(node1).includes(node2)) {
          adjList.set(node1, [...adjList.get(node1), node2]);
          adjListAlgo.set(node1, [...adjListAlgo.get(node1), node2]);
          adjListAlgo.set(node2, [...adjListAlgo.get(node2), node1]);
        }
      } else if ((directed && weighted) || (directed && !weighted)) {
        if (!weighted) setEdgeWeight(1);
        let e = new Edge(node2, edgeWeight, edgeDirection);
        if (!adjList.get(node1).includes(e)) {
          adjList.set(node1, [...adjList.get(node1), e]);
          if (edgeDirection == "->") {
            let ew = new WeightedEdge(node2, edgeWeight);
            adjListAlgo.set(node1, [...adjListAlgo.get(node1), ew]);
          } else if (edgeDirection == "<->") {
            let ew = new WeightedEdge(node2, edgeWeight);
            adjListAlgo.set(node1, [...adjListAlgo.get(node1), ew]);
            ew = new WeightedEdge(node1, edgeWeight);
            adjListAlgo.set(node2, [...adjListAlgo.get(node2), ew]);
          } else if (edgeDirection == "<-") {
            let ew = new WeightedEdge(node1, edgeWeight);
            adjListAlgo.set(node2, [...adjListAlgo.get(node2), ew]);
          }
        }
      } else if (!directed && weighted) {
        let e = new Edge(node2, edgeWeight, null);
        let ew = new WeightedEdge(node2, edgeWeight);
        let ew2 = new WeightedEdge(node1, edgeWeight);
        if (!adjList.get(node1).includes(e)) {
          adjList.set(node1, [...adjList.get(node1), e]);
          adjListAlgo.set(node1, [...adjListAlgo.get(node1), ew]);
          adjListAlgo.set(node2, [...adjListAlgo.get(node2), ew2]);
        }
      }
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
        if (!weighted && !directed) {
          edges.push(
            <Xarrow
              key={`edge${i}-${arr[j]}`}
              id={`${i}-${arr[j]}`}
              start={`vertex-${i}`}
              end={`vertex-${arr[j]}`}
              color="black"
              showHead={false}
            ></Xarrow>
          );
        } else if (directed || weighted) {
          let x = arr[j].direction == "<->";
          let w = arr[j].weight;
          if (directed && !weighted) {
            w = "";
          }
          edges.push(
            <Xarrow
              key={`edge${i}-${arr[j].node}`}
              id={`${i}-${arr[j].node}`}
              start={`vertex-${i}`}
              end={`vertex-${arr[j].node}`}
              color="black"
              labels={<h5 style={{ color: "red" }}>{w}</h5>}
              showHead={x || arr[j].direction == "->"}
              showTail={x || arr[j].direction == "<-"}
            ></Xarrow>
          );
        }
      }
    }
    return edges;
  };

  const visualize = () => {
    switch (algoOption) {
      case "Breath First Search":
        let visited = BFS(sourceV, destV, adjListAlgo, weighted, directed);
        if (visited == "No Path Found") alert("No Path Found");
        else visualizePath(visited);
        break;
      case "Dijkstra":
        let [path, distances, visit] = Dijkstra(
          sourceV,
          destV,
          adjListAlgo,
          weighted,
          directed
        );
        if (path == "No Path Found") alert("No Path Found");
        else visualizeDijkstra(path, distances, visit);
        break;
    }
  };

  const visualizeDijkstra = (path, distances, visited) => {
    let str = "";
    for (let i = 0; i < path.length; i++) {
      str += path[i] + ", ";
    }
    for (let i = 0; i < visited.length; i++) {
      setTimeout(() => {
        document.getElementById(
          `vertex-${visited[i][0]}`
        ).style.backgroundColor = "red";
        document.getElementById(`weight-${visited[i][0]}`).textContent =
          visited[i][1];
      }, 1000 * i);
      setTimeout(() => {
        document.getElementById(
          `vertex-${visited[i][0]}`
        ).style.backgroundColor = "white";
      }, 1000 * i + 1000);
    }
    setPath(str);
  };

  const visualizePath = (p) => {
    let str = "";
    for (let i = 0; i < p.length; i++) {
      setTimeout(() => {
        let e = document.getElementById(`vertex-${p[i]}`).style;
        e.backgroundColor = "red";
        str += p[i].toString() + ", ";
      }, 1000 * i);
      setTimeout(() => {
        document.getElementById(`vertex-${p[i]}`).style.backgroundColor =
          "white";
        setPath(str);
      }, 1000 * i + 1000);
    }
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
        <FormControlLabel
          control={<Checkbox checked={directed} onChange={handleChangeD} />}
          label="Directed"
        />
        <FormControlLabel
          control={<Checkbox checked={weighted} onChange={handleChangeW} />}
          label="Weighted"
        />
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
            <TextField
              autoFocus
              align="center"
              id="outlined-number"
              label="Edge Weight"
              type="number"
              variant="standard"
              onChange={(e) => {
                setEdgeWeight(Number(e.target.value));
              }}
            />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="select-label">Direction</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={edgeDirection}
                label="Direction"
                onChange={(e) => {
                  setEdgeDirection(e.target.value);
                }}
              >
                <MenuItem value={"->"}>{"->"}</MenuItem>
                <MenuItem value={"<->"}>{"<->"}</MenuItem>
                <MenuItem value={"<-"}>{"<-"}</MenuItem>
              </Select>
            </FormControl>
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
            <MenuItem value={"Dijkstra"}>Dijkstra</MenuItem>
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
