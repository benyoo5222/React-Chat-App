import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render () {
    const eachmessage = this.props.state.messages.map( (each) => (
      <Message name = {each.username} key= {each.id} messagecontent = {each.content} type={each.type}/>
    ));
    return (
      <main className= "messages">
        {eachmessage}
      </main>
    )
  }
}

export default MessageList;