import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './СomponentsNav/Header';
import Dboard from './СomponentsNav/Dboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header></Header>
    
    <Dboard></Dboard>
  </React.StrictMode>
);

reportWebVitals();
