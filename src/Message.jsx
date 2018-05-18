import React, {Component} from 'react';

class Message extends Component {

  render () {
    return (
      <div>
      {this.props.type === "incomingMessage" ?
        <div className="message">
          <span className="message-username" >{this.props.name}</span>
          <span className="message-content">{this.props.messagecontent}</span>
        </div> :
        <div className="message system">
          {this.props.messagecontent}
        </div>
      }

      </div>

    );
  }
}

export default Message;