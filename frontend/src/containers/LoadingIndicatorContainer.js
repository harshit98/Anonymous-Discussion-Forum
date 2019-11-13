import { connect } from 'react-redux';
import {  } from '../actions/actions';

import LoadingIndicator from '../components/LoadingIndicator';


const mapStateToProps = state => {

  return {
    isFetching: state.page.isFetching
  };
};


const LoadingIndicatorContainer = connect(mapStateToProps)(LoadingIndicator);

export default LoadingIndicatorContainer;
