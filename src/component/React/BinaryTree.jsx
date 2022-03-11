import { default as BinaryTree } from "../DSA/DataStructures/BinaryTree/binaryTree.js";
import react from "react";
import TreeNode from "./TreeNodes.jsx"

class BinaryTreeComponent extends react.Component {
    constructor(props) {
    super(props);

    this.state = {
      value: 0,
      tree: null,
    };
      
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount() {
    this.resetTree();
  }

  resetTree() {
    let newTree = new BinaryTree();
    this.setState({ tree: newTree });
  }
  
  onChangeValue(data) {
    this.setState({ value: data.target.value });
  }

  setRoot() {
    this.state.tree.root = this.state.value;
    this.forceUpdate();
  }

  add() {
    this.state.tree.add(this.state.value);
    this.forceUpdate();
  }
render() {
    let Nodes = () => {
      console.log(this.state.tree);
    };
    return (
      <div>
        <button onClick={() => this.resetTree()}>Reset Tree</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.setRoot()}> Set Root </button>
          <button onClick={() => this.add()}> Add Value </button>
        </div>
        {Nodes()}
      </div>
    );
  }
}
export default BinaryTreeComponent;
