import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav";
import SinglyLinkedListComponent from "./component/React/SinglyLinkedList";
import { DataStructures, Algorithms } from "./component/DSA/exports";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
  Stack: { Stack },
  Queue: { Queue },
  BinaryTree: { BinaryTree },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const t = new BinaryTree();
    t.add("Dario");
    t.add("Arias");
    t.add("Danna");
    console.log(t);
    return (
      <div>
        <Nav />
        <SinglyLinkedListComponent></SinglyLinkedListComponent>
      </div>
    );
  }
}

export default App;
