import React, { Component } from 'react';
import './App.css';

import ListContainer from '../containers/ListContainer';
import LoadingIndicatorContainer from '../containers/LoadingIndicatorContainer'; 

class App extends Component {
  render() {

    return <div>
      <LoadingIndicatorContainer />
      <ListContainer />
    </div>;
  }
}

export default App;
