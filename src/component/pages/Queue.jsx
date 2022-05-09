import React from 'react';
import axios from 'axios';
import Queue from "../visualizer/LearnQueue";

class QueuePage extends React.Component{
  constructor(props){
    super(props)
  }

  Enqueue(){
    this.Queue.Enqueue(Math.floor(Math.random() * 100));
  }

  Dequeue(){
    this.Queue.Dequeue();
  }

  render(){    
    return (
      <div className="shell">
        <header className="shell-header">
            <h1>Queues</h1>
        </header>
        <main className="shell-body">
          <Queue ref = {Queue=>this.Queue = Queue}></Queue>
        </main>
        <main className='shell-bodyII'>
          <h2>What is a Queue</h2>
          <p>A Queue is an abstract data type that is a collection of elements 
            and can be maintained by adding at the end of the collection and 
            removal from the beginning of the collection. The queue follows a FIFO 
            (First In First Out) principal in that an element that is added first to the queue will 
            be removed from the queue first. Lines are an example of a queue. 
            For example, the first person in a line will be served first, while 
            the last person in the line has to wait until all the people in front have been served. 
          </p>
          <hr></hr>
          <h2>Enqueue Method</h2>
          <p>The Enqueue Method is a method for the queue that allows 
            addition of elements at the end of the queue.
          </p>
          <button onClick={() => this.Enqueue()}> Click here to Enqueue </button>
          <hr></hr>
          <h2>Dequeue Method</h2>
          <p>The Dequeue Method is a method for the queue that allows 
            the removal of elements through the beginning of the queue.
            <br></br>
            <button onClick={() => this.Dequeue()}> CLick here to Dequeue </button>
          </p>
        </main>
        <footer className="shell-footer">
        </footer>
      </div>
    );
  }
}
 
export default QueuePage;
