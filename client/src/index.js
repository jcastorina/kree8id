import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";

const body = document.getElementById('root').parentElement
body.setAttribute('class','text-center')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
