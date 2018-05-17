import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { name:"" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
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
    const newArray = [...this.state.messages, parsedMessage];

    this.setState({ messages: newArray });
  });


 /* setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);*/
}


addMessage = (newmessage) => {

  if (this.state.currentUser.name.length <= 0){
    console.log("NOO");
  } else {

    let sendingmessage = JSON.stringify({...newmessage, user: this.state.currentUser.name});
    //console.log(sendingmessage);

    this.socket.send(sendingmessage);

  }

  //this.socket.send(JSON.stringify(newmessage));

  //const messages = [...this.state.messages, newmessage];
  //this.setState({messages});
}

setUser = (theuser) => {

  const newuser = { ...this.state.currentUser, name: theuser };
  const newcurrent = { ...this.state, currentUser: newuser};

  this.setState(newcurrent, () => {

  //console.log("The updated state", this.state);

  });




  //console.log("blah", newcurrent);


}

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages = { this.state.messages }/>
        <ChatBar setuser = {this.setUser} user = { this.state.currentUser.name } addmessage ={this.addMessage}/>
      </div>
    );
  }
}
export default App;
