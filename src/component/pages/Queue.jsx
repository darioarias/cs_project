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
          <hr></hr>
          <h2>Leetcode Challenges</h2>
          <ul>
            Leetcode Easy:
            <li><a href="https://leetcode.com/problems/number-of-recent-calls/" target = "_blank">Number of Recent Calls</a></li>
            <li><a href="https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/" target = "_blank">Number of Students Unable to Eat Lunch</a></li>
            <li><a href="https://leetcode.com/problems/time-needed-to-buy-tickets/" target = "_blank">Time Needed to Buy Tickets</a></li>
            Leetcode Medium:
            <li><a href="https://leetcode.com/problems/reveal-cards-in-increasing-order/" target = "_blank">Reveal Cards In Increasing Order</a></li>
            <li><a href="https://leetcode.com/problems/find-the-winner-of-the-circular-game/" target = "_blank">Find the Winner of the Circular Game</a></li>
            <li><a href="https://leetcode.com/problems/flatten-nested-list-iterator/" target = "_blank">Flatten Nested List Iterator</a></li>
            <li><a href="https://leetcode.com/problems/design-front-middle-back-queue/" target = "_blank">Design Front Middle Back Queue</a></li>
            Leetcode Hard:
            <li><a href="https://leetcode.com/problems/constrained-subsequence-sum/" target = "_blank">Constrained Subsequence Sum</a></li>
            <li><a href="https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/" target = "_blank">Delivering Boxes from Storage to Ports</a></li>
          </ul>
        </main>
        <footer className="shell-footer">
        </footer>
      </div>
    );
  }
}
 
export default QueuePage;
