import { default as SinglyLinkedList } from "../DSA/DataStructures/LinkedList/singlyLinkedList.js";
import react from "react";
import SinglyLinkedListNode from "./SinglyLinkedListNode.jsx";

class LearnSinglyLinkedListComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      list: new SinglyLinkedList(null, 10),
    };
    for (let i = 0; i<5; i++){
      this.state.list.append(i);
    }
    this.getHead = this.getHead.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  resetList() {
    // let newlist = new SinglyLinkedList(null, 5);
    this.setState({ list: new SinglyLinkedList(null, 10) });
  }

  push() {
    try {
      this.state.list.push(this.state.value);
      this.forceUpdate();
    } catch (e) {
      console.log(e.toString());
    }
  }

  append() {
    try {
      this.state.list.append(this.state.value);
    } catch (e) {
      console.log(e.toString());
    }
    this.forceUpdate();
  }

  remove() {
    this.state.list.remove(Number(this.state.value));
    this.forceUpdate();
  }

  pop() {
    this.state.list.pop();
    this.forceUpdate();
  }

  search() {
    console.log(this.state.list.search(this.state.value));
    this.forceUpdate();
  }

  removeLast() {
    this.state.list.removeLast();
    this.forceUpdate();
  }

  getHead() {
    if (this.state.list != null) {
      return this.state.list.head;
    }
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  goBack = () => {
    this.props.navigateTo('/')
  }

  /**
   * @description instantiate nodes from the linked list for the visuals
   * @param {*} pol : list of nodes
   * @returns array of instantiated node components
   */
  tests(pol) {
    let listNodes = [];
    let output = [];
    pol.map((node, index) =>
      listNodes.push(
        <SinglyLinkedListNode key={index} data={node}></SinglyLinkedListNode>
      )
    );
    for (let i = 0; i < listNodes.length; i++) {
      output.push(listNodes[i]);
      //if (i + 1 < listNodes.length)
      //output.push(<div class="arrow-1"></div>)
    }
    return output;
  }

  render() {
    let Nodes = () => {
      if (this.state.list !== null) {
        return <>{this.tests(this.state.list.toArr())}</>;
      }
    };
    return (
      <div>
        <div
          className="jsavlist jsavautoresize jsavhorizontallist scroller"
          data-visible="true"
          data-nodegap="40"
          data-autoresize="true"
          style={{
            padding: "10px",
            display: "flex",
            gap: "0px",
            alignItems: "flex-start",
          }}
        >
          {Nodes()}
        </div>
      </div>
    );
  }
}

export default LearnSinglyLinkedListComponent;
