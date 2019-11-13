import { connect } from 'react-redux';
import { addText, postMessage } from '../actions';

import List from '../components/List';


const mapStateToProps = state => {

  return {
    item: state.list,
    position: [],
    discussionNumber: state.page.discussionNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addText: (text, position) => {
      dispatch(addText(text, position));
    },
    postMessage: (text, position, discussionNumber) => {
      dispatch(postMessage(text, position, discussionNumber));
    }
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
