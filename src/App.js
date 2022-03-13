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
  AVLTree: { AVLTree },
} = DataStructures; // for testing only, will not be used in production.

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const avl = new AVLTree();
    avl.insert(20);
    avl.insert(15);
    avl.insert(10);

    avl.insert(25);
    avl.insert(30);

    avl.insert(35);
    avl.insert(40);

    avl.insert(45);
    avl.insert(50);
    avl.insert(55);
    avl.insert(60);
    avl.insert(65);

    // console.log(avl);
    console.log("AVL TREE");

    avl.remove(45);
    avl.remove(50);
    avl.remove(55);
    avl.remove(25);
    avl.remove(30);
    avl.remove(35);
    avl.remove(40);
    avl.remove(60);
    avl.remove(15);
    avl.remove(20);
    avl.remove(65);
    avl.remove(10);
    avl.remove(10);
    avl.print();
    console.log(avl);

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
