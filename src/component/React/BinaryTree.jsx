import { default as BinaryTree } from "../DSA/DataStructures/BinaryTree/binaryTree.js";
import react from "react";
import TreeNode from "./TreeNodes.jsx";
import Box from '@mui/material/Card';
import Learn from '../webpages/Learn';



class BinaryTreeComponent extends react.Component {
    constructor(props) {
    super(props);

    this.state = {
      value: 0,
      tree: null,
    };
      
    this.onChangeValue = this.onChangeValue.bind(this);
    this.goBackHandler = this.goBackHandler.bind(this);
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
  goBackHandler() {
    this.props.setGoBack(true)
  }
render() {
    let Nodes = () => {
      console.log(this.state.tree);
    };
    return (
      <div>
        {
          !this.props.goBack ?
        (<>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            p: 10,
            m: 10,
            bgcolor: '#1976D2',
            borderRadius: 10,
          }}
        >
        <button onClick={() => this.resetTree()}>Reset Tree</button>
        <div>
          <input value={this.state.value} onChange={this.onChangeValue} />
          <button onClick={() => this.setRoot()}> Set Root </button>
          <button onClick={() => this.add()}> Add Value </button>
        </div>
        </Box>
        {Nodes()}
        <button onClick={this.goBackHandler}>Return</button>
        </>
          ) : <Learn/>}
      </div>
    );
  }
}
export default BinaryTreeComponent;
