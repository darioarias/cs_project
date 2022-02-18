import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";

import { DataStructures, Algorithms } from "./component/DSA/exports";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(DataStructures, Algorithms);
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
