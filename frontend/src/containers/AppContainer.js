import { connect } from 'react-redux';

import App from '../components/App';
import { fetchDiscussion } from '../actions/actions';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDiscussion: (discussionId) => {
      dispatch(fetchDiscussion(discussionId));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
