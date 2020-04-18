import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message-container">
        <p className="author">
          {this.props.message.author}
        </p>
        <p className="content">
          {this.props.message.content}
        </p>
      </div>
    );
  }
}

export default Message;
