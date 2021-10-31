import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styling/index.css';
import App from './App';
import {createStore, applyMiddleWare} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleWare(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
