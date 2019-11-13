
let rootMessage = {_id: "5995986ea6deb7240c381cd0"};
export { rootMessage };

const list = (state = {messages:[rootMessage]}, action) => {
  switch (action.type) {
    case 'REPLY_BOX_VISIBILITY': {
      let newState = {...state};

      newState.messages = newState.messages.map((message) => {
        if (message._id === action.id) {
          return {...message, showReplyBox: !message.showReplyBox};
        } else {
          return message;
        }
      });

      return newState;
    }
    case 'CHANGE_INPUT':{
      let newState = {...state};

      newState.messages = newState.messages.map((message) => {
        if (message._id === action.id) {
          return {...message, input: action.input};
        } else {
          return message;
        }
      });

      return newState;
    }
    case 'RECEIVE_MESSAGE':{

      let newState = {...state};
      //newState.messages = newState.messages.concat(action.message);

      newState.messages = newState.messages.map((message) => {
        if (message._id === action.message.parent) {
          return {...message, waitingMessageResponse: false, notification: null, input: "", showReplyBox: false};
        } else {
          return message;
        }
      })
      .concat(action.message);

      return newState;
    }
    case 'ERROR_RECEIVE_MESSAGE':{

      let newState = {...state};


      newState.messages = newState.messages.map((message) => {
        if (message._id === action.parentId) {
          return {...message, waitingMessageResponse: false, notification: action.error};
        } else {
          return message;
        }
      });

      return newState;
    }
    case 'RECEIVE_DISCUSSION':{
      let newState = {...state };


      newState.messages = action.discussion.concat(rootMessage);
      return newState;
    }

    case 'SEND_MESSAGE':{

      let newState = {...state};

      newState.messages = newState.messages.map((message) => {
        if (message._id === action.parentId) {
          return {...message, waitingMessageResponse: true, notification: null};
        } else {
          return message;
        }
      });

      return newState;
    }

    default:
      return state;
  }
};


export default list;
