import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UsuarioStore } from './contexts/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuarioStore>
      <App />
    </UsuarioStore>
  </React.StrictMode>
);