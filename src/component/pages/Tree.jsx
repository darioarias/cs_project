import React from 'react';
import BinaryTree from '../visualizer/LearnBinaryTree';

class Treepage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div className='shell'>
      <header className='shell-header'>
          <h1>Binary Trees</h1>
      </header>
      <main className='shell-body'>
        <BinaryTree ref={BinaryTree=>this.BinaryTree = BinaryTree}></BinaryTree>
      </main>
      <main className='shell-bodyII'>
        <h2>What is a Binary Tree</h2>
        <p></p>
        <hr></hr>
        <h2>Add Left Method</h2>
        <p>Insert a value to the left of a node assuming the node does not have any left child nodes.</p>
        <hr></hr>
        <h2>Add Right Method</h2>
        <p>Insert a value to the right of the node assuming the node does not have any right child nodes.</p>
        <hr></hr>
        <h2>Add method</h2>
        <p>Inserts a value into the tree at the first open spot from the first node missing a left or right child</p>
        <hr></hr>
        <h2>Leetcode Challenges</h2>
        <ul>
          Leetcode Easy:
          <li><a href="https://leetcode.com/problems/range-sum-of-bst/" target = "_blank">Range Sum of BST</a></li>
          <li><a href="https://leetcode.com/problems/univalued-binary-tree/" target = "_blank">Univalued Binary Tree</a></li>
          <li><a href="https://leetcode.com/problems/increasing-order-search-tree/" target = "_blank">Increasing Order Search Tree</a></li>
          <li><a href="https://leetcode.com/problems/root-equals-sum-of-children/" target = "_blank">Root Equals Sum of Children</a></li>
          <li><a href="https://leetcode.com/problems/binary-tree-paths/" target = "_blank">Binary Tree Paths</a></li>
          Leetcode Medium:
          <li><a href="https://leetcode.com/problems/deepest-leaves-sum/" target = "_blank">Deepest Leaves Sum</a></li>
          <li><a href="https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/" target = "_blank">Binary Search Tree to Greater Sum Tree</a></li>
          <li><a href="https://leetcode.com/problems/count-good-nodes-in-binary-tree/" target = "_blank">Count Good Nodes in Binary Tree</a></li>
          Leetcode Hard:
          <li><a href="https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/" target = "_blank">Count Subtrees With Max Distance Between Cities</a></li>
          <li><a href="https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" target = "_blank">Serialize and Deserialize Binary Tree</a></li>
        </ul>
      </main>
      <footer className='shell-footer'>
      </footer>
    </div>
  );
  }
}

export default Treepage;
