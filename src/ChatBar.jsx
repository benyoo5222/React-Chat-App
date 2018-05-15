import React, {Component} from 'react';

class ChatBar extends Component {

  handleUserInput = ( event ) => {

    if (event.key === 'Enter') {

      const newmessage = {
        username: this.props.user,
        content: event.target.value,
        id: Math.floor((Math.random() * 100) + 1)
      }

      this.props.addmessage(newmessage);

      event.target.value ="";
    }

  }

  render () {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder= {this.props.user}  />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress= { this.handleUserInput } />
      </footer>
    )
  }
}

export default ChatBar;