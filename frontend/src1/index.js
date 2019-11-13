import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import listApp from './reducers';

import thunkMiddleware from 'redux-thunk';


import { fetchDiscussion, postMessage } from './actions';


var store = createStore(listApp,
  applyMiddleware(
    thunkMiddleware
  )
);

console.log(store.getState());
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(fetchDiscussion(7));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
