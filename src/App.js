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
  Graph: { Graph },
} = DataStructures; // for testing only, will not be used in production.

const App = () => {
  const [theme, setTheme] = useState(false);
  const themeStyle = theme === false ? LightTheme : DarkTheme;

  const g = new Graph();
  console.log(g);

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
  );
};

export default App;
