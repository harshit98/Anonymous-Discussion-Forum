import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rootMessage } from '../reducers/discussion';

import './App.css';

import MessageListContainer from '../containers/MessageListContainer';
import LoadingIndicatorContainer from '../containers/LoadingIndicatorContainer';

class App extends Component {
  componentDidMount() {
    // console.log('match', this.props.match);
    this.props.fetchDiscussion(this.props.match.params.discussionId);
  }
  render() {
    return(
      <div className="rootMessage">
        <LoadingIndicatorContainer  />
        <MessageListContainer replyText="Create a new thread"  parentId={rootMessage._id} discussionId={this.props.match.params.discussionId}/>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  match: PropTypes.object.isRequired,
  fetchDiscussion: PropTypes.func.isRequired,
};
