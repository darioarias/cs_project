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
        <p>Insert a value to the right of the node assuming the node does not have any right chidl nodes.</p>
        <hr></hr>
        <h2>Add method</h2>
        <p>Inserts a value into the tree at the first open spot from the first node missing a left or right child</p>
        <hr></hr>
      </main>
      <footer className='shell-footer'>
      </footer>
    </div>
  );
  }
}

export default Treepage;
