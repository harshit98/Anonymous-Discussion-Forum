

const list = (state = {isFetching: false, discussionId: "jgd"}, action) => {
  switch (action.type) {

    case 'REQUEST_DISCUSSION':{

      return {...state, isFetching: true};
    }
    case 'RECEIVE_DISCUSSION':{

      return {...state, isFetching: false};
    }

    default:
      return state;
  }
};



export default list;
