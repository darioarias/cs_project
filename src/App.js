import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme, DarkTheme } from "./styles/themes";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./component/navbar/Navbar";
import Homepage from "./component/pages/Home";
import LinkedListpage from "./component/pages/LinkedList";
import Queuepage from "./component/pages/Queue";
import Stackpage from "./component/pages/Stack";
import Treepage from "./component/pages/Tree";
import Sandbox from "./component/sandbox/sandbox";

import { DataStructures, Algorithms } from "./component/DSA/exports";
import BinarySearchTree from "./component/DSA/DataStructures/BinarySearchTree/binarySearchTree";

import {
  Dijkstra,
  Astar,
} from "./component/visualizer/PathFindingViz/algorithms/PathFinding";
import PathFindingViz from "./component/visualizer/PathFindingViz/Pathfind";
// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
  Stack: { Stack },
  Queue: { Queue },
  BinaryTree: { BinaryTree },
  BinarySearchTree: { BinarySearchTree: BST },
  AVLTree: { AVLTree },
  Heaps: { Heap },
  PriorityQueues: { PriorityQueue },
  Graph: { AdjacencyList, AdjacencyMatrix },
} = DataStructures; // for testing only, will not be used in production.

const App = () => {
  const [theme, setTheme] = useState(false);
  const themeStyle = theme === false ? LightTheme : DarkTheme;

  const graph = new AdjacencyMatrix();
  let singapore = graph.createVertex("Singapore");
  let tokyo = graph.createVertex("Tokyo");
  let hongKong = graph.createVertex("Hong Kong");
  let detroit = graph.createVertex("Detroit");
  let sanFrancisco = graph.createVertex("San Francisco");
  let washingtonDC = graph.createVertex("Washington DC");
  let austinTexas = graph.createVertex("Austin Texas");
  let seattle = graph.createVertex("Seattle");

  graph.add("undirected", singapore, hongKong, 300);
  graph.add("undirected", singapore, tokyo, 500);
  graph.add("undirected", hongKong, tokyo, 250);
  graph.add("undirected", tokyo, detroit, 450);
  graph.add("undirected", tokyo, washingtonDC, 300);
  graph.add("undirected", hongKong, sanFrancisco, 600);
  graph.add("undirected", detroit, austinTexas, 50);
  graph.add("undirected", austinTexas, washingtonDC, 292);
  graph.add("undirected", sanFrancisco, washingtonDC, 337);
  graph.add("directed", seattle, washingtonDC, 337);
  // console.log(graph.edges(tokyo));

  //
  return (
    <ThemeProvider theme={themeStyle}>
      <CssBaseline />

      <NavBar toggleTheme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/linkedlist" element={<LinkedListpage />} />
        <Route path="/queue" element={<Queuepage />} />
        <Route path="/stack" element={<Stackpage />} />
        <Route path="/tree" element={<Treepage />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </ThemeProvider>
    // <PathFindingViz></PathFindingViz>
  );
};

export default App;
