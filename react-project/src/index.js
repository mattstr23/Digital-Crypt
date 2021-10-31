import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styling/index.css'
import App from './App';
import {createStore, applyMiddleWare} from 'redux';
import {Provider} from 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
