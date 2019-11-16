import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import discussionApp from './reducers';

import thunkMiddleware from 'redux-thunk';

import logger from 'redux-logger';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { fetchDiscussion, postMessage } from './actions/actions';

var store = createStore(discussionApp,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:discussionId" component={AppContainer} />
    </Router>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
