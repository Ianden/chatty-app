import React, {Component} from 'react';

// import jsx modules
import Navigation from './Navigation.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			messages: [], 
			currentUser: {name: 'landen'}, // todo: add colour
			connectedUsers: 1
		};

		this.addMessage = this.addMessage.bind(this);
	}

	componentDidMount() {
		// connect to server
		this.socket = new WebSocket('ws://localhost:3001');
		this.socket.onmessage = (m) => {
			
			const message = JSON.parse(m.data);
			// used for updating 'users online' counter
			if (message.type === 'connectionNotice') {
				this.setState({connectedUsers: message.connected});

				// used for setting the username on the client end
				// todo: remove, switch to keeping all user-related state in server
			} else if (message.type === 'usernameChange') {
				this.setState({currentUser: {name: message.username}});

				// all other messages, rendered according to 'type' and 'class' properties
			} else {
				this.setState({messages: [...this.state.messages, message]});
			}
		}
	}

	// send message to server
	// todo: give a better name
	addMessage(message) {
		this.socket.send(JSON.stringify(message)); 
	}

	// meat and potatos
  render() {
    return (
    	<div>
    		<Navigation connectedUsers={this.state.connectedUsers.toString()} />
    		<MessageList messages={this.state.messages} />
    		<ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} />
    	</div>
  	);
  }
}

export default App;
