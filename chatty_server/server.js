const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv4 = require('uuid/v4');

// helper functions
const {generateRandomUserHandle} = require("./utils/utils");

function getRandomColour() {
	const colours = ['red', 'green', 'blue', 'purple'];
	return colours[Math.floor(Math.random() * Math.floor(colours.length))]
}

const bots = {
	id: function(argument, username) {
		if (argument === 'random') argument = generateRandomUserHandle();
		return [{
			id: uuidv4(),
			type: 'incommingNotification',
			content: `${username} now identifies as ${argument}.`,
			username
		}, {
			type: 'usernameChange',
			username: argument
		}];
	},
	is: function(argument, username) {
		return [{
			id: uuidv4(),
			type: 'incommingNotification',
			content: `${username} is ${argument}.`,
			username
		}];
	},
	joined: function(argument) {
		return [{
			id: uuidv4(),
			type: 'incommingNotification',
			content: `${argument} has joined the party.`,
			username: 'system'
		}, {
			type: 'usernameChange',
			username: argument
		}];
	}
}

function parseCommand(command, username) {
	let commandName = "", commandArgument = "";
	if (command[0] === '/') {
		[commandName, commandArgument] = command.match(/^\/(\S*) (.*)$/).splice(1);
	}

	if (commandName) {
		return bots[commandName](commandArgument, username);
	} else {
		return [{
			id: uuidv4(),
			type: 'incommingMessage',
			content: command,
			username
		}];
	}
}

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(m) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			
			if (m) {
  			client.send(JSON.stringify(m));
			} else {
				const connectionNotice = {
					type: 'connectionNotice',
					connected: wss.clients.size
				};
				client.send(JSON.stringify(connectionNotice));
			}
		}
	 });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {

	let handle = generateRandomUserHandle();
  let colour = getRandomColour();
  console.log(`Connected: ${handle}.`);

  const results = bots['joined'](handle);
  wss.broadcast();
  wss.broadcast(results[0]);
  ws.send(JSON.stringify(results[1]));

  // recieves a message (just a string), parses it, runs the appropriate bot (if any),
  // and constructs a response to send back to the user(s).

  // note: name changes entered in the name input field are converted to `/name name`
  // on the client side before sending.
  ws.on('message', (m) => {
  	const message = JSON.parse(m);
	  const results = parseCommand(message.content, message.username);
	  wss.broadcast(results[0]);
	  if (results[1]) ws.send(JSON.stringify(results[1]));
	});

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
  	console.log('User disconnected.');
  	wss.broadcast()	
  });
});

