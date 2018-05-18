// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {

  wss.clients.forEach( client => {
    client.send(wss.clients.size);
  })
  //console.log(ws);

  console.log('Client connected');

  ws.on('message', (message) => {

    const messageReceived = JSON.parse(message);

    //console.log(`User ${messageReceived.username} said ${messageReceived.content}`);

    if (messageReceived.type === "postMessage"){
      const sendingMessage = {
        type: "incomingMessage",
        id : uuidv4(),
        username: messageReceived.user,
        content: messageReceived.content
      }
      wss.clients.forEach((client)=>{
        client.send(JSON.stringify(sendingMessage));
      });
    } else {
      const sendingMessage = {
        type: "incomingNotification",
        id : uuidv4(),
        content: messageReceived.content
      }
      wss.clients.forEach((client)=>{
        client.send(JSON.stringify(sendingMessage));
      });
    }


  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected', wss.clients.size);
    wss.clients.forEach( client => {
      client.send(wss.clients.size)
    })

  });

});