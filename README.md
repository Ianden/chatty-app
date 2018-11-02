# Chatty
Chatty is beautiful single page chat application, built using ReactJS and websockets.
![][image-1]

## Features
- Connect with a randomly generated username[^1]
- Use commands to change usernames and send statuses
- Receive notifications when other users connect/disconnect

### Commands
Broadly speaking, commands (referenced internally as ‘bots’) can do three things:
1. Send notifications (`/is`, `/id`),
2. Transform messages (coming soon),
3. Return information back to the sender (`/id`).

They can be invoked from the chat like so:
`/command_name command_argument`

Currently, the list of available commands includes:
- `/id <new username>` — change username
- `/id <random>` — randomly generate a new username
- `/is <status>` — send a status notification to the chat

There are also additional commands that are used within the server, such as `/joined` for sending a new user status. These can technically be invoked from the chat as well, though that’s not supposed to happen.

## Dependencies
- node: \>=6.0.0
- babel-core: 6.23.1
- babel-loader: 6.3.1
- babel-preset-es2015: 6.22.0
- babel-preset-react: 6.23.0
- babel-preset-stage-0: 6.22.0
- css-loader: 0.26.1
- eslint: 3.15.0
- eslint-plugin-react: 6.9.0
- express: 4.16.4
- node-sass: 4.5.0
- react: 15.4.2
- react-dom: 15.4.2
- sass-loader: 6.0.0
- sockjs-client: ^1.1.2
- style-loader: 0.13.1
- uuid: ^3.3.2
- webpack: 2.2.1
- webpack-dev-server: 2.3.0
- ws: 6.1.0

## Getting Started
1. Clone this repository
2. Install dependences in both `app/` and `chatty_server/` 
```bash
npm i
```
3. Start the web server from `app/`
```bash
npm start
```
4. Start the websocket server form `chatty_server`
```bash
npm start
```
5. Navigate to [http://0.0.0.0:3000][1]

## Todo
- More commands!
	- Figure out a better implementation for commands
- Move all user state to the server (for easier management of names, colours, and notifications)
- Add user-controllable username colours
- Add gif and image support
- Add a list of currently connected users
- Reinvigorate the design to look _slightly nicer_

[^1]:	Chatty app is not responsible for any unfortunate combinations of names generated.

[1]:	http://0.0.0.0:3000

[image-1]:	https://github.com/Ianden/chatty-app/raw/master/images/chatty.png "Chatty main page"
