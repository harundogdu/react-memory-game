import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MemoryProvider as MemoryContext } from './contexts/memoryContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MemoryContext>
      <App />
    </MemoryContext>
  </React.StrictMode>
);
