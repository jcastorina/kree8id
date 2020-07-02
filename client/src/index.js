import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css';
import App from './App';

const body = document.getElementById('root').parentElement
body.setAttribute('class','text-center')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
