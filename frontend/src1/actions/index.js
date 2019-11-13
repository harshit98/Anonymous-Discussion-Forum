import fetch from 'isomorphic-fetch';


export const addText = (text, position) => {
  return {
    type: 'ADD_ITEM',
    text,
    position
  };
};


export const requestDiscussion = (discussionNumber) => {
  return {
    type: 'REQUEST_DISCUSSION',
    discussionNumber
  };
};



export const receiveDiscussion = (discussionNumber, json = {}) => {
  return {
    type: 'RECEIVE_DISCUSSION',
    discussionNumber,
    discussion: json
  };
};

export function fetchDiscussion(discussionNumber) {
  return (dispatch) => {
    console.log('hei');
    dispatch(requestDiscussion(discussionNumber));
    return fetch(`http://localhost:3000/api/tree/${discussionNumber}`)
      .then(

        response => {
          console.log('response', response);
          return response.json();
        }
        ,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json => {
        console.log('json', json);
        dispatch(receiveDiscussion(discussionNumber, json));
        console.log('after')


      }
      );
  };
}

export function postMessage(message, position, discussionNumber) {
  return (dispatch) => {
    console.log('postmessage', message, position, discussionNumber);
    //before here

    return fetch(`http://localhost:3000/api/tree/${discussionNumber}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: message,
        position
      })
    })
      .then(

        response => {
          console.log('response', response);
          return response.json();
        }
        ,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json => {
        console.log('json', json);
        //dispatch(receiveDiscussion(discussionNumber, json));
        console.log('after')


      }
      );
  };
}
