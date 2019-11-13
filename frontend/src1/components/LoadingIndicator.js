import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LoadingIndicator extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    if (this.props.isFetching) {
      return (
        <div>
          Loading...
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
