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
import Heappage from "./component/pages/Heap";
import Sandbox from "./component/sandbox/sandbox";
import LinkedListLearn from "./component/pages/LinkedListLearn";
import LearnStacks from "./component/pages/LearnStacks";
import LearnQueues from "./component/pages/LearnQueues";
import LearnTrees from "./component/pages/LearnTrees";
import LearnHeaps from "./component/pages/LearnHeaps";


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
} = DataStructures; // for testing only, will not be used in production.

const App = () => {
  const [theme, setTheme] = useState(false);
  const themeStyle = theme === false ? LightTheme : DarkTheme;

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
        <Route path="/Heap" element={<Heappage />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/Learn/LinkedList" element={<LinkedListLearn />} />
        <Route path="/Learn/Stacks" element={<LearnStacks />} />
        <Route path="/Learn/Queues" element={<LearnQueues />} />
        <Route path="/Learn/BinaryTrees" element={<LearnTrees />} />
        <Route path="/Learn/Heaps" element={<LearnHeaps />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
