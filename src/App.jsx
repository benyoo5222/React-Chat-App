import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { name:"" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      members: 0
    }
  }

//
  //const options = {...this.state.currentUser.options, bar: 5}
  //const currentUser = {...this.state.currentUser, options}
  //this.setState({currentUser})
//
componentDidMount() {

  let socket;
  this.socket = new WebSocket("ws://localhost:3001");

  this.socket.addEventListener('open', (event) => {
    console.log('Connected to server');
  })

  this.socket.addEventListener( "message", (incomingMessage) => {
    const parsedMessage = JSON.parse(incomingMessage.data);

    if(parsedMessage.type === "incomingMessage"){
      const newArray = [...this.state.messages, parsedMessage];
      this.setState({ messages: newArray });
    } else if (parsedMessage.type === "incomingNotification") {
      const newArray = [...this.state.messages, parsedMessage];
      this.setState({ messages: newArray });
    } else {
      this.setState({members: incomingMessage.data})
    }
  });
}


addMessage = (newmessage) => {
  if (this.state.currentUser.name.length <= 0){
    console.log("NOO");
  } else {
    let sendingmessage = JSON.stringify({ type: "postMessage", content: newmessage, user: this.state.currentUser.name});
    console.log(sendingmessage);
    this.socket.send(sendingmessage);
  }
}

setUser = (theuser) => {

  if (theuser !== this.state.currentUser.name && this.state.currentUser.name !== ""){
    const changeuser = JSON.stringify({type: "postNotification", content: `${this.state.currentUser.name} changed their name to ${theuser}`});
    this.socket.send(changeuser);
  } else if (this.state.currentUser.name === "" && theuser !== "") {
    const changeuser = JSON.stringify({type: "postNotification", content: `Anonymous changed their name to ${theuser}`});
    this.socket.send(changeuser);
  }

  const newuser = { ...this.state.currentUser, name: theuser };
  const newcurrent = { ...this.state, currentUser: newuser};

  this.setState(newcurrent);

}

  render() {
    return (
      <div>
        <NavBar members={this.state.members}/>
        <MessageList state= { this.state }/>
        <ChatBar setuser = {this.setUser} user = { this.state.currentUser.name } addmessage ={this.addMessage}/>
      </div>
    );
  }
}
export default App;
