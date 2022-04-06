import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import './grid.css'



export default function LearnHeaps() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return (
    <div class="shell">
      <header class="shell-header">
          <h1>Heaps</h1>
      </header>
      <main class="shell-body">
      </main>
      <main class='shell-bodyII'>
      </main>
      <footer class="shell-footer">
      <button onClick={handleOnClick}>Return</button>
      </footer>
    </div>
  );
}
