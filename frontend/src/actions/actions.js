import fetch from 'isomorphic-fetch';

export const changeInput = (id, input) => {
  return {
    type: 'CHANGE_INPUT',
    id,
    input
  };
};

export const toggleReplyBoxVisibility = (id) => {
  return {
    type: 'REPLY_BOX_VISIBILITY',
    id
  };
};

export const receiveMessage = (message) => {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
};

export const errorReceiveMessage = (error, parentId) => {
  return {
    type: 'ERROR_RECEIVE_MESSAGE',
    error,
    parentId
  };
};

export const requestDiscussion = (discussionId) => {
  return {
    type: 'REQUEST_DISCUSSION',
    discussionId
  };
};

export const receiveDiscussion = (discussionId, json = {}) => {
  return {
    type: 'RECEIVE_DISCUSSION',
    discussionId,
    discussion: json
  };
};

export function fetchDiscussion(discussionId) {
  return (dispatch) => {
    dispatch(requestDiscussion(discussionId));
    return fetch(`/api/discussion/${discussionId}`)
      .then(
        response => {
          return response.json();
        },

        // eslint-disable-next-line no-console
        error => console.log('An error occured.', error)
      )
      .then(json => {
        // eslint-disable-next-line no-console
        console.log('json', json);
        dispatch(receiveDiscussion(discussionId, json));
      });
  };
}

export const sendMessage = (parentId) => {
  return {
    type: 'SEND_MESSAGE',
    parentId
  };
};

export function postMessage(message, parentId, discussionId) {

  return (dispatch) => {
    // console.log('fetch');
    // let messageText = state.discussion.messages.find(message => (message._id === parentId));
    // console.log('fetchPost');
    dispatch(sendMessage(parentId));

    return fetch(`/api/discussion/${discussionId}`, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        text: message,
        parent: parentId
      })
    })
    .then(
      (response) => {
        // eslint-disable-next-line no-console
        console.log(response);

        if (response.ok) {
          response.json().then((json) => {
            // console.log('json',json);
            dispatch(receiveMessage(json));
          });
        } else {
          // console.log('json not ok', response);
          dispatch(errorReceiveMessage(response.statusText, parentId));
        }
      },
      
      (error) =>dispatch(errorReceiveMessage("Failed to post message: (" + error.message + ")", parentId))
    );
  };
}
