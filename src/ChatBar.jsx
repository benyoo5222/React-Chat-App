import React, {Component} from 'react';

class ChatBar extends Component {

  handleUserInput = ( event ) => {

    if (event.key === 'Enter') {

      const newmessage = {
        content: event.target.value
      }

      this.props.addmessage(newmessage);

      event.target.value ="";

    }

  }

  findOutUser = ( event ) => {

    //console.log(event.target.value);

    this.props.setuser(event.target.value);


  }

  render () {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder= "User" onBlur = {this.findOutUser} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress= { this.handleUserInput } />
      </footer>
    )
  }
}

export default ChatBar;