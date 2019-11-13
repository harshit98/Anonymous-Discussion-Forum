import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageListContainer from '../containers/MessageListContainer';

class Message extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReplyBtnClick = this.handleReplyBtnClick.bind(this);


  }

  handleInputChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.changeInput(this.props.message._id, event.target.value);
  }

  handleSubmit(e) {
    this.props.postMessage(
      this.props.message.input,
      this.props.message._id,
      this.props.discussionId
    );
    e.preventDefault();
  }

  handleReplyBtnClick(e) {
    this.props.toggleReplyBoxVisibility(this.props.message._id, !this.props.message.showReplyBox);
    e.preventDefault();
  }

  render() {

    let filteredList = this.props.messages.filter((message) => {
      return message.parent === this.props.message._id;
    });

    var textList = filteredList.map((message, i) => {
      return <li  key={i}>
        <MessageListContainer
        discussionId={this.props.discussionId}
        message={message}
        postMessage={this.props.postMessage} //function

        />
      </li>;
    }).reverse();

    let replyText = this.props.replyText || "reply";

    let replyButton = <button href='#' className="replyButton" onClick={this.handleReplyBtnClick} >{replyText}</button>;

    let thisMessage = this.props.message;
    let isLoading = thisMessage.waitingMessageResponse;
    let notification = thisMessage.notification;
    let input = thisMessage.input || "";
    let showReplyBox = thisMessage.showReplyBox || false;

    let isDisabled = isLoading;

    let replyForm;

    if (showReplyBox) {
      replyForm =
      <div className="replyBox">
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea  rows="4" className="messageInput" autoFocus  type="text" disabled={isDisabled} value={input} name="fieldText" onChange={this.handleInputChange}></textarea>
        </label>
        <input type="submit" disabled={isDisabled} value="Send" />
        <div className="notification">{isLoading ? 'loading...' : null }{notification} </div>
      </form>
    </div>;
    } else {
      replyForm = null;
    }


    if (!this.props.isFetching){
      return (
        <div className="message">
          <div className="messageText">{thisMessage.text}</div>
          {replyButton}
          {replyForm}

          <ul className="messageList">
            {textList}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Message;

Message.propTypes = {
  message: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  parentId: PropTypes.string,
  postMessage: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  toggleReplyBoxVisibility: PropTypes.func.isRequired,
  discussionId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  replyText:  PropTypes.string

};
