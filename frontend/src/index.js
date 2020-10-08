import React from 'react';
import ReactDOM from 'react-dom';
//set up store, compose allows comes from redux combines different middlewares into one so we can pass in one argument as thunk which is what middleware is looking for
import {createStore, applyMiddleware, compose} from 'redux';
// handles async requests
import thunk from 'redux-thunk';
// any component that we wrap in provider will have access to our redux store
import { Provider } from 'react-redux';

import App from './App';
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let reducer = ''

// set up store, is saving your data globally, reducaer is an action, reducer will take in the action object and depending on how i set it up, will return a newer version of the store if it will need to update.
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  // any component that we put here will have access to the store that will hav eot be passed to the provider
  <Provider store={store}>
    <App />
  </Provider>
,
document.getElementById('root'));
