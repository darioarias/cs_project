import React, { Component } from "react";
import "./App.css";
import Nav from "./component/webpages/Navbar";
import { DataStructures, Algorithms } from "./component/DSA/exports";
import Home from "./component/webpages/Home";
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
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        {/* <div className="container-fluid">
          <SinglyLinkedListComponent></SinglyLinkedListComponent>
        </div> */}
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
