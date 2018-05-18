import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      username: props.user
    }
  }

  componentWillReceiveProps({user}) {
    this.setState({username: user})
  }

  handleUserInput = ( event ) => {
    if (event.key === 'Enter') {
      this.props.addmessage(this.state.content);
      this.setState({content: ''})
    }
  }

  findOutUser = ( event ) => {
    if(event.key === 'Enter') {
      this.props.setuser(this.state.username);
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder= "User" value={this.state.username} onChange={this.handleChange} name="username" onKeyPress = {this.findOutUser} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          onKeyPress= { this.handleUserInput }
        />
      </footer>
    )
  }
}

export default ChatBar;