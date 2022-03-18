import { default as Stack } from "../DSA/DataStructures/Stack/stack.js";
import react from "react";
import StackNode from "./StackNode";
class StackComponent extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      list: null,
      max: 5, //set max limit to the stack to 5 nodes
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  /*Instantiate the stack when the stack page is loaded*/
  componentDidMount() {
    this.resetList();
  }

  /*Resetting the stack */
  resetList() {
    // let newList = new Stack(null, this.state.max);
    this.setState({ list: new Stack(null, this.state.max) });
  }

  //Detect value user entered in the input fields
  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  //Push the node into the top of the stack the user entered in the input fields
  push() {
    this.state.list.push(this.state.value);
    this.forceUpdate();
  }

  //Pop the node into the stack from the top of the stack
  pop() {
    this.state.list.pop();
    this.forceUpdate();
  }

  //Peek at the top node of the stack
  peek() {
    console.log(this.state.list.peek());
    this.forceUpdate();
  }

  /**
   * @description instantiate nodes from the stack for the visuals
   * @param {*} pol : list of nodes
   * @returns array of instantiated node components
   */
  outputting(stackNodes) {
    let listStackNodes = [];
    let output = [];
    stackNodes.map((node, index) =>
      listStackNodes.push(<StackNode key={index} data={node}></StackNode>)
    );
    for (let i = 0; i < listStackNodes.length; i++) {
      output.push(listStackNodes[i]);
    }
    return output;
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
        <button onClick={() => this.resetList()}> Reset List</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.push()}>Push Value</button>
          <button onClick={() => this.pop()}>Pop Value</button>
          <button onClick={() => this.peek()}>Peek Value</button>
        </div>
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
          <div className="verticalNodes">Top of Stack</div>
          {Nodes()}
          <div className="verticalNodes">Bottom of Stack</div>
        </div>
      </div>
    );
  }
}

export default StackComponent;
