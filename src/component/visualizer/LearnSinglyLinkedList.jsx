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

  // push method calls the push method defined in our logic
  // The parameter is for the learning portion to pass random values, without user input
  push(pushedValue = -1) {
    let capacity = 10 - this.getLength(); // the limit to the linked list is 10 for the learn
    // If user push in learning, exceeds out max size of 10 then alert user
    if (capacity - 1 < 0){
      alert("For our example, the max size is 10 nodes");
      pushedValue = -1; 
      return 
    }

    if (pushedValue !== -1){
      this.state.list.push(pushedValue);
      this.forceUpdate();
      pushedValue = -1;
      return 
    }
  }

  append(pushedValue = -1) {
    let capacity = 10 - this.getLength(); // the limit to the linked list is 10 for the learn
    // If user append in learning, exceeds out max size of 10 then alert user
    if (capacity - 1 < 0){
      alert("For our example, the max size is 10 nodes");
      pushedValue = -1; 
      return 
    }
    if (pushedValue !== -1){
      this.state.list.append(pushedValue);
      this.forceUpdate();
      pushedValue = -1;
      return 
    }
  }

  remove(value) {
    this.state.list.remove(value);
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
      return this.state.list.head.__private_0_value;
    }
    return null;
  }

  getTail(){
    if (this.state.list != null) {
      return this.state.list.tail.__private_0_value;
    }
    return null;
  }

  getLength(){
    return this.state.list.lengthLinkedList();
  }

  onChangeValue(data) {
    this.setState({ value: data.target.value });
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
