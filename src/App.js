import React, { Component } from "react";
import "./App.css";
import Nav from "./component/webpages/Navbar";
import SinglyLinkedListComponent from "./component/React/SinglyLinkedList";
import { DataStructures, Algorithms } from "./component/DSA/exports";
import Home from "./component/webpages/homepage";

// const LS = DataStructures.LinkedLists.SinglyLinkedList

const {
  Nodes: { SinglyLinkedListNode: Node },
  LinkedLists: { SinglyLinkedList: List, DoublyLinkedList: DList },
  Stack: { Stack },
  Queue: { Queue },
  BinaryTree: { BinaryTree },
  BinarySearchTree: { BinarySearchTree: BST },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(13);
    bst.insert(8);
    bst.insert(17);
    bst.insert(9);
    bst.insert(7);
    bst.insert(4);
    bst.insert(2);
    bst.insert(14);
    bst.insert(12);
    bst.insert(16);
    bst.insert(18);

    // bst.remove(18);
    // bst.remove(2);
    // bst.remove(10);
    // bst.remove(15);
    // bst.remove(16);
    // bst.remove(12);
    // bst.remove(5);
    // bst.remove(9);
    // bst.remove(8);
    // bst.remove(7);
    // bst.remove(14);
    // bst.remove(4);
    // bst.remove(13);
    // bst.remove(17);
    // bst.remove(3);
    // console.log("has: 14", bst.contains(14));
    // bst.remove(14);
    // console.log("has: 14", bst.contains(14));
    // bst.insert(14);
    // console.log("has: 14", bst.contains(14));
    console.log(bst.toArr());
    bst.print();
    // console.log(bst);

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
