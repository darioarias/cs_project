import React from 'react';
import SinglyLinkedList from "../visualizer/LearnSinglyLinkedList";
import axios from 'axios';

//This class is the parent to the Singly Linked List. 
//The class will call methods of the singly linked list components via refs
class LinkedListpage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      courseDesc: []
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  componentDidMount(){
    axios.get("https://algoviz-pyflask-rest-api.herokuapp.com/api/v1/courses/")
    .then(response=>{
        // console.log(response)
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

  remove(){
    if (this.state.value < this.SinglyLinkedList.getLength())
      this.SinglyLinkedList.remove(this.state.value);
    else{
      alert("Pick a number within the index of the linked list");
    }
  }

  removeLast(){
    this.SinglyLinkedList.removeLast();
  }

  pop(){
    this.SinglyLinkedList.pop();
  }

  getHead(){
    let headVal = this.SinglyLinkedList.getHead();
    if (headVal >= 0){
      alert(`The head node has value ${headVal}`);
      return
    }
    alert ("There are no nodes in the linked list");
  }

  getTail(){
    let tailVal = this.SinglyLinkedList.getTail();
    if (this.SinglyLinkedList.getLength() == 1){
      alert(`The node has value ${tailVal}. The node is a tail and head node`);
      return    
    }
    if (tailVal >= 0){
      alert(`The tail node has value ${tailVal}`);
      return
    }
    alert ("There are no nodes in the linked list");
  }

  onChangeValue(data) {
    this.setState({ value: Number(data.target.value) });
  }

  render(){
    // console.table(this.state.courseDesc)
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
            <h2>Head</h2>
            <p>The first node in the linked list is called the head of the linked list. If the linked list is empty then the head node of the linked list should be null.</p>
            <button onClick={() => this.getHead()}>Check out the head node</button>
            <hr></hr>
            <h2>Tail</h2>
            <p>The last node in the linked list is called the tail of the linked list. If the linked list is empty then the tail node of the linked list should be null. If there is only one node, then the node is both a head and a tail node</p>
            <button onClick={() => this.getTail()}>Check out the tail node</button>
            <hr></hr>
            <h2>Push Method</h2>
              <p>The push method for a linked list is used to put a new node in the beginning of the linked list.</p>
              <button onClick={() => this.push(Math.floor(Math.random() * 100))}>Click here to try the push method</button>
            <hr></hr>
            <h2>Append Method</h2>
              <p>The append method for a linked list is used to put a new node at the end of the linked list</p>
              <button onClick={() => this.append(Math.floor(Math.random() * 100))}>Click here to try the append method</button>
            <hr></hr>
            <h2>Remove Last Method</h2>
            <p>The remove last method for a linked list will remove the tail node or the last node in the linked list</p>
            <button onClick={() => this.removeLast()}>Click here to try the append method</button>
            <hr></hr>
            <h2>Remove at Index Method</h2>
              <p>The remove method for a linked list is used to remove a node at a specific index from the linked list. The head node is index 0 and the last node is the length of the linked list - 1</p>
              <input value={this.state.value} onChange={this.onChangeValue} />
              <button onClick={() => this.remove()}>Click here to try the remove method</button>
            <hr></hr>
            <h2>Pop Method</h2>
              <p>The pop mrthod for a linked list is used to remove the head node of the linked list</p>
              <button onClick={() => this.pop()}>Click here to try the pop method</button>
            <hr></hr>
          </div>
        </main>
        <footer className="shell-footer">
        </footer>
      </div>
   );
  }
}
 
export default LinkedListpage;
