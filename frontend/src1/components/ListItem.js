import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './List'

class ListItem extends Component {
  render() {
    return <li key={this.props.id}>{this.props.text}<List texts={this.props.texts} /></li>;
  }

}

export default ListItem;

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  texts: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  addText: PropTypes.func.isRequired

};
