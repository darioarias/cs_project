import React, { useState, useCallback } from "react";
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
import Users from "./component/pages/Users";
import Profile from "./component/pages/UserProfile";
import SignForm from "./component/pages/Sign.jsx";

import { DataStructures, Algorithms } from "./component/DSA/exports";
import BinarySearchTree from "./component/DSA/DataStructures/BinarySearchTree/binarySearchTree";

import {
  Dijkstra,
  Astar,
} from "./component/visualizer/PathFindingViz/algorithms/PathFinding";
import PathFindingViz from "./component/visualizer/PathFindingViz/Pathfind";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();
  const navigateTo = useCallback(
    (path) => navigate(path, { replace: true }),
    [navigate]
  );

  const themeStyle = theme === false ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={themeStyle}>
      <CssBaseline />
      <NavBar toggleTheme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/linkedlist"
          element={<LinkedListpage navigateTo={navigateTo} />}
        />
        <Route path="/queue" element={<Queuepage navigateTo={navigateTo} />} />
        <Route path="/stack" element={<Stackpage navigateTo={navigateTo} />} />
        {/* <Route path="/tree" element={<Treepage navigateTo={navigateTo} />} /> */}
        <Route path="/Heap" element={<Heappage navigateTo={navigateTo} />} />
        <Route path="/Sign" element={<SignForm />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </ThemeProvider>
    // <PathFindingViz></PathFindingViz>
  );
};

export default App;
