

const list = (state = { texts:[]}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':{

      let newState = {...state};
      var text = newState;
      var newText;

      for (let i of action.position) {
        newText = text.texts[i];
        text = newText;
      }

      var objectToAdd = {
        text: action.text,
        texts:[],
        pullUp: true
      };

      text.texts = text.texts.concat(objectToAdd);
      return newState;
    }
    case 'RECEIVE_DISCUSSION':{

      let newState = {...state, texts: action.discussion.texts};
      console.log('newstate', newState);
      return newState;
    }


    default:
      return state;
  }
};



export default list;
