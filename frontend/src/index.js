import React from 'react';
import ReactDOM from 'react-dom';
//set up store, compose allows comes from redux combines different middlewares into one so we can pass in one argument as thunk which is what middleware is looking for
import {createStore, applyMiddleware} from 'redux';
// handles async requests, returns a function from the action creator, benfits us by 
import thunk from 'redux-thunk';
// any component that we wrap in provider will have access to our redux store
import { Provider } from 'react-redux';
import universityReducer from './reducers/universityReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom';


import App from './App';

// set up store, is saving your data globally, reducaer is an action, reducer will take in the action object and depending on how i set it up, will return a newer version of the store if it will need to update.
let store = createStore(
  universityReducer,
  composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  // any component that we put here will have access to the store that will hav eot be passed to the provider

  <Provider store={store}>
    <Router>
    <App />
  
  </Router>
  </Provider>
,
document.getElementById('root'));
