// src/main.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'src/index.css'; // Tailwind styles

const container = document.getElementById('app');
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


