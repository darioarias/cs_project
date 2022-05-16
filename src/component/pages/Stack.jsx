import React from 'react';
import Stack from "../visualizer/LearnStack";
import axios from 'axios';

class StackPage extends React.Component{
  constructor(props){
    super(props)
  }

  push(randomValuePushed){
    this.Stack.push(randomValuePushed);
  }

  pop(){
    this.Stack.pop();
  }

  peek(){
    this.Stack.peek();
  }

  render(){
    return(
      <div className="shell">
      <header className="shell-header">
          <h1>Stacks</h1>
      </header>
      <main className="stack-shell-body">
        <Stack ref={Stack=>this.Stack = Stack}></Stack>
      </main>
      <main className='stack-shell-bodyII'>
        <h2>What is a Stack</h2>
        <p>A Stack is an abstract data type that serves as a collection of elements. 
          The Stack follows a LIFO (Last In First Out) principal in that the last inserted item 
          in the stack is the first item removed. In a real world example with a stack of plates, a plate can be inserted
          at the top of the stack and removed from the top of the stack.    
        </p>
        <hr></hr>
        <h2>Push Method</h2>
        <p>The push method for a stack is used to add an element into the collection at the top of the stack</p>
        <button onClick={() => this.push(Math.floor(Math.random() * 100))}>Push Value</button>
        <hr></hr>
        <h2>Pop Method</h2>
        <p>The pop method for a stack is used to remove the top-most element from the stack</p>
        <button onClick={() => this.pop()}>Click here to try the pop method</button>
        <hr></hr>
        <h2>Peek Method</h2>
        <p>The peek method will return the value of the top element and will not modify the stack</p>
        <button onClick={() => this.peek()}>Peek Value</button>
        <hr></hr>
        <h2>Leetcode Challenges</h2>
        <ul>
          Leetcode Easy:
          <li><a href="https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/" target = "_blank">Maximum Nesting Depth of the Parentheses</a></li>
          <li><a href="https://leetcode.com/problems/remove-outermost-parentheses/" target = "_blank">Remove Outermost Parentheses</a></li>
          <li><a href="https://leetcode.com/problems/increasing-order-search-tree/" target = "_blank">Increasing Order Search Tree</a></li>
          <li><a href="https://leetcode.com/problems/build-an-array-with-stack-operations/" target = "_blank">Build an Array With Stack Operations</a></li>
          <li><a href="https://leetcode.com/problems/min-stack/" target = "_blank">Min Stack</a></li>
          Leetcode Medium:
          <li><a href="https://leetcode.com/problems/design-a-stack-with-increment-operation/" target = "_blank">Design a Stack With Increment Operation</a></li>
          <li><a href="https://leetcode.com/problems/design-browser-history/" target = "_blank">Design Browser History</a></li>
          <li><a href="https://leetcode.com/problems/validate-stack-sequences/" target = "_blank">Validate Stack Sequences</a></li>
          <li><a href="https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" target = "_blank">Minimum Remove to Make Valid Parentheses</a></li>
          Leetcode Hard:
          <li><a href="https://leetcode.com/problems/number-of-visible-people-in-a-queue/" target = "_blank">Number of Visible People in a Queue</a></li>
          <li><a href="https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/" target = "_blank">Minimum Number of Increments on Subarrays to Form a Target Array</a></li>
          <li><a href="https://leetcode.com/problems/brace-expansion-ii/" target = "_blank">Brace Expansion II</a></li>
        </ul>
      </main>
      <footer className="stack-shell-footer">
      </footer>
    </div>
    );
  }
}

export default StackPage;