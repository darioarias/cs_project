import React from 'react';

const Heappage = (props) => {
 return (
      <div className="shell">
      <header className="shell-header">
          <h1>Heaps</h1>
      </header>
      <main className="shell-body">
      </main>
      <main className='shell-bodyII'>
      </main>
      <footer className="shell-footer">
      <button onClick={()=> {
        props.navigateTo('/')
      }}>Return</button>
      </footer>
    </div>

 );
};
 
export default Heappage;