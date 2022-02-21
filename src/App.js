import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";

import { DataStructures, Algorithms } from "./component/DSA/exports";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(new DList(null), DList.__type);

    let n1 = new Node(1);
    let n2 = new Node(2);

    n1.value = 20;

    return (
      <div>
        <Nav />
        <div
          dangerouslySetInnerHTML={{
            __html: n2.toString(),
          }}
        />
      </div>
    );
  }
}

export default App;
