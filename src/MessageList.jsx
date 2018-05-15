import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render () {
    const eachmessage = this.props.message.map(each => (
      <Message key= {each.id} messagecontent = {each} />
    ))
    return (
      <main className= "messages">
        {eachmessage}
      </main>
    )
  }
}

export default MessageList;