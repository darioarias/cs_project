import React from 'react';
import Heap from '../visualizer/LearnHeap';

class Heappage extends React.Component{
  constructor(props){
    super(props)
  }

  Insert(){
    this.Heap.insert(Math.floor(Math.random() * 100));
  }

  Remove(){
    this.Heap.remove();
  }

  render(){
    return (
      <div className="shell">
      <header className="shell-header">
          <h1>Heaps</h1>
      </header>
      <main className="shell-body" style={{position:"relative"}}>
        <Heap ref = {Heap=>this.Heap = Heap}></Heap>
      </main>
      <main className='shell-bodyII' style={{position:"relative"}}>
      <h2>What is a Heap</h2>
          <p> 
            A heap is tree-based data structure that takes the form of a binary tree. The highest priority element will be at the top of the heap.
            To start click on the insert method.
            The above heap is a min-heap, where the lowest value will be at the top of the tree and the higher numbers will be lower down the tree. 
            The max heap is another type of heap, where the highest value will be at the top of the tree and the lowest numbers will be at the bottom of the tree.
          </p>
          <hr></hr>
          <h2>Insert Method</h2>
            When a user inserts an element into the min-heap, the element will sift up until the parent is less than the element. 
            In a max-heap, the element will sift up until the element is less than the parent. The above example is a min-heap, so the lowest value will 
            be highest element in the tree.
          <p> 
          </p>
          <button onClick={() => this.Insert()}> Click here to Insert </button>
          <hr></hr>
          <h2>Remove Method</h2>
          <p>The Remove Method is a method for the heap that allows the removal of the top-most element from the heap.
          </p>
          <button onClick={() => this.Remove()}> Click here to Remove </button>
          <hr></hr>
      </main>
      <footer className="shell-footer" style={{position:"relative"}}>
      </footer>
    </div>
    );
  }
}

export default Heappage;