import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@fontsource/alegreya-sans/400.css';
import '@fontsource/alegreya-sans/700.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import './styles/global.scss';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
