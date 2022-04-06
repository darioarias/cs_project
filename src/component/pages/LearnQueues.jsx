import React from 'react';


export default function LearnQueues(props) {
  return (
    <div className="shell">
      <header className="shell-header">
          <h1>Queues</h1>
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
}
