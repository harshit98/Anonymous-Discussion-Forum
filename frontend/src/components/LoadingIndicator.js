import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingIndicator extends Component {
  render() {
    var loadingText = "Loading database...";
    if (this.props.isFetching) {
      return (
        <div>
          {loadingText}
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default LoadingIndicator;

LoadingIndicator.propTypes = {
  isFetching: PropTypes.bool.isRequired
};
