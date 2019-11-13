import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoadingIndicator extends Component {

  render() {
    var loadingText = "Loading... (It might take a while for the database to start if this site hasn't been used in a while)";
    if (this.props.isFetching) {
      return (
        <div>
          {loadingText}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LoadingIndicator;

LoadingIndicator.propTypes = {
  isFetching: PropTypes.bool.isRequired
};
