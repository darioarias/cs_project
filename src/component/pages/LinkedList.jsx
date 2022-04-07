import React from 'react';

const LinkedListpage = (props) => {
 return (
    <div className="shell">
      <header className="shell-header">
          <h1>Linked List</h1>
      </header>
      <main className="shell-body ">
        WOW A LINKED LIST FROM OUR BACKEND IS ARRIVING!!!
      </main>
      <main className='shell-bodyII'>
        <div>
          <h2>What is a Linked List</h2>
            <p>A Linked List is a data structure that is composed of nodes with an integer value and a link to the next node.</p>
          <hr></hr>
          <h2>Push Method</h2>
            <p>The push method for a linked list is used to put a new node as the starting node in the linked list</p>
            <button>Click here to try the push method</button>
          <hr></hr>
          <h2>Append Method</h2>
            <p>The append method for a linked list is used to put a new node at the end of the linked list</p>
            <button>Click here to try the append method</button>
          <hr></hr>
          <h2>Remove Method</h2>
            <p>The remove method for a linked list is used to remove a specific value in a node from the linked list</p>
            <button>Click here to try the remove method</button>
          <hr></hr>
          <h2>Pop Method</h2>
            <p>The pop mrthod for a linked list is used to remove the last node of the linked list</p>
            <button>Click here to try the pop method</button>
        </div>
      </main>
      <footer className="shell-footer">
      <button onClick={()=> {
        props.navigateTo('/')
      }}>Return</button>
      </footer>
    </div>
 );
};
 
export default LinkedListpage;
