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
    return fetch(`/api/anonymous-discussion-forum/${discussionId}`)
      .then(
        response => {
          return response.json();
        },
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json => {
        console.log('json', json);
        dispatch(receiveDiscussion(discussionId, json));
      }
      );
  };
}

export const sendMessage = (parentId) => {
  return {
    type: 'SEND_MESSAGE',
    parentId
  };
};

export function postMessage(message, parentId, discussionId) {

  return (dispatch, getState) => {

    console.log('fetch');
    //let messageText = state.discussion.messages.find(message => (message._id === parentId));
    console.log('fetchPost');

    dispatch(sendMessage(parentId));

    return fetch(`/api/anonymous-discussion-forum/${discussionId}`, {
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
          console.log(response);
          //let jsonPromise = response.json();
          //console.log(jsonPromise);
          if (response.ok) {
            response.json().then((json) => {
              console.log('json',json);
              dispatch(receiveMessage(json));
            });
          } else {
            console.log('json notok', response);
            dispatch(errorReceiveMessage(response.statusText, parentId));

          }
        },
        (error) =>dispatch(errorReceiveMessage("Failed to post message: (" + error.message + ")", parentId))
      );
  };
}
