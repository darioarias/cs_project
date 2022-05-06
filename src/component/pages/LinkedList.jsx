import React from 'react';
import SinglyLinkedList from "../visualizer/LearnSinglyLinkedList";
import axios from 'axios';

//This class is the parent to the Singly Linked List. 
//The class will call methods of the singly linked list components via refs
class LinkedListpage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      courseDesc: []
    }
  }

  componentDidMount(){
    axios.get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
    .then(response=>{
        console.log(response)
        // for now this is static prob use for loop or somehing to store json stuff
        this.setState({courseDesc:response.data[3].description})
    })
    .catch(error=>{console.log(error)})    
  }

  push(randomValuePushed){
    this.SinglyLinkedList.push(randomValuePushed);
  }

  append(randomValueAppended){
    this.SinglyLinkedList.append(randomValueAppended);
  }

  // maybe add user inputs?
  remove(){
    this.SinglyLinkedList.remove();
  }

  pop(){
    this.SinglyLinkedList.pop();
  }

  //more stuff to add?

  render(){
    console.table(this.state.courseDesc)
    return (
      <div className="shell learning-text">
        <header className="shell-header">
            <h1>Linked List</h1>
        </header>
        <main className="shell-body ">
          <SinglyLinkedList ref={SinglyLinkedList=>this.SinglyLinkedList = SinglyLinkedList}></SinglyLinkedList>
        </main>
        <main className='shell-bodyII'>
          <div>
            <div>{this.state.courseDesc}</div>
            <h2>What is a Linked List</h2>
              <p>A Linked List is a data structure that is composed of nodes with an integer value and a link to the next node.</p>
            <hr></hr>
            <h2>Push Method</h2>
              <p>The push method for a linked list is used to put a new node as the starting node in the linked list</p>
              <button onClick={() => this.push(Math.floor(Math.random() * 100))}>Click here to try the push method</button>
            <hr></hr>
            <h2>Append Method</h2>
              <p>The append method for a linked list is used to put a new node at the end of the linked list</p>
              <button onClick={() => this.append(Math.floor(Math.random() * 100))}>Click here to try the append method</button>
            <hr></hr>
            <h2>Remove Method</h2>
              <p>The remove method for a linked list is used to remove a specific value in a node from the linked list</p>
              <button onClick={() => this.remove()}>Click here to try the remove method</button>
            <hr></hr>
            <h2>Pop Method</h2>
              <p>The pop mrthod for a linked list is used to remove the head node of the linked list</p>
              <button onClick={() => this.pop()}>Click here to try the pop method</button>
          </div>
        </main>
        <footer className="shell-footer">
        </footer>
      </div>
   );
  }
}
 
export default LinkedListpage;
