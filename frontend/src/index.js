import React from 'react';
import ReactDOM from 'react-dom';
//set up store
import {createStore, applyMiddleware} from 'redux';
// handles async requests
import thunk from 'redux-thunk';
// any component that we wrap in provider will have access to our redux store
import { Provider } from 'react-redux';

// import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
