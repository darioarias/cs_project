import { default as Stack } from "../DSA/DataStructures/Stack/stack.js";
import react from "react";
import StackNode from "./StackNode";

class StackComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      list: new Stack(null, 10),
      animate: "",
      max: 10, //set max limit to the stack to 10 nodes
    };
    for (let i = 0; i<5; i++){
        this.state.list.push(i);
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidUpdate() {
    const { stack } = this.state;
    if (this.state.animate == "push") {
      const element = document.getElementById("0");
      if (element) element.style.backgroundColor = "#1e90ff";
    }
  }

  //Detect value user entered in the input fields
  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  getLength(){
    console.log(this.state.list.getLength())
    return this.state.list.getLength();
  }

  //Push the node into the top of the stack the user entered in the input fields
  //the parameter is a flag used from the learn portion of the page
  push(pushedValue = -1) {
    let capacity = 10 - this.getLength(); // the limit to the stack is 10 for the learn
    // If user push in learning, exceeds out max size of 10 then alert user
    if (capacity - 1 < 0){
      alert("For our example, the max size is 10 nodes");
      pushedValue = -1; 
      return 
    }
    if (pushedValue !== -1){
      this.state.list.push(pushedValue);
      this.setState({animate:"push"}); 
      this.forceUpdate();
      pushedValue = -1;
      return 
    }
  }

  //Pop the node into the stack from the top of the stack
  pop() {
    this.state.list.pop();
    this.forceUpdate();
  }
  
  //Peek at the top node of the stack
  peek() {
    alert(`The top element is ${this.state.list.peek()}`);
  }
  
  /**
   * @description instantiate nodes from the stack for the visuals
   * @param {*} pol : list of nodes
   * @returns array of instantiated node components
   */
  outputting(stackNodes) {
    let listStackNodes = [];
    stackNodes.map((node, index) =>
      listStackNodes.push(<StackNode key={index} data={node} index={index}></StackNode>)
    );
    return listStackNodes;
  }

  render() {
    //call the ouputting function to instantiate the stack nodes
    let Nodes = () => {
      if (this.state.list !== null) {
        return <>{this.outputting(this.state.list.toArr())}</>;
      }
    };
    //return is what is sent to the frontend such as the buttons and the stack with the instantiated nodes
    return (
      <div>
            <div
              className="jsavlist jsavautoresize jsavverticallist vertical"
              data-visible="true"
              data-nodegap="40"
              data-autoresize="true"
              style={{
                padding: "10px",
                display: "flex",
                gap: "0px",
                alignItems: "flex-start",
                position: "static",
                display: "block",
                maxWidth: "10%",
                margin: "auto",
              }}
            >
              {Nodes()}
            </div>
        </div>
    );
  }
}

export default StackComponent;
