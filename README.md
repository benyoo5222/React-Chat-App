# Chatty App

Chatty App is a single page web app that allows users to send messages back and forth. The app was built using React, Websocket, Express, and Node.

## Final Product

!["Screenshot of ChattyApp"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/Final%20product.png?raw=true)

## Dependencies

- React
- Babel
- CSS-Loader
- ES Lint
- Node Sass
- Webpack
- Websocket
- SockJs
- Style-Loader
- Express
- UUID

## Getting Started

- Install dependencies using 'npm install' command on the main directory.
- Intall dependencies using 'npm install' inside the chatty_server directory.
- Type in your username on the left input field and write a message you want to send to other users.

## Key Features

1. Once you type in your username and leave the input field, a notification will pop up saying "anonymous changed their name to".

!["Screenshot of ChattyApp username"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/Before-setting-username.png?raw=true)
!["Screenshot of ChattyApp username notification"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/After-setting-username.png?raw=true)

2. Any message that the user types in is broadcasted to all the users on this chat app.

!["Screenshot of ChattyApp messages"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/Before-sending-message.png?raw=true)
!["Screenshot of ChattyApp messages"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/After-sending-message.png?raw=true)

3. The top right corner shows the active members of this chat. If another person joins or leaves, this will reflect the active members in real time.

!["Screenshot of ChattyApp member count"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/original-count.png?raw=true)
!["Screenshot of ChattyApp member count"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/showing-members.png?raw=true)
!["Screenshot of ChattyApp member count"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/change-in-count.png?raw=true)

4. If a user changes their username, another notification will popup notifying everyone that the user changed their name.

!["Screenshot of ChattyApp notification"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/User-changedname.png?raw=true)
!["Screenshot of ChattyApp notification"](https://github.com/benyoo5222/React-Chat-App/blob/master/public/user-changedname-again.png?raw=true)
