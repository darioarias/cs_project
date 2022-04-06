import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';



export default function LearnStacks() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return (
    <div className="shell">
      <header className="shell-header">
          <h1>Stacks</h1>
      </header>
      <main className="shell-body">
      </main>
      <main className='shell-bodyII'>
      </main>
      <footer className="shell-footer">
      <button onClick={handleOnClick}>Return</button>
      </footer>
    </div>
  );
}
