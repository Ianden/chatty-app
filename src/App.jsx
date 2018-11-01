import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';
const uuidv4 = require('uuid/v4');

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			messages: [], 
			currentUser: {name: 'landen'}
		};
		this.addMessage = this.addMessage.bind(this);
	}

	componentDidMount() {
		this.socket = new WebSocket("ws://localhost:3001");
		this.socket.onopen = function (event) {
  		console.log("Connected to server.");
		};
	}

	addMessage(message) {
		message.id = uuidv4();
		console.log(message);
		this.socket.send(JSON.stringify(message)); 
    // const messages = this.state.messages.concat(message)
    // this.setState({messages});
	}

  render() {
    return (
    	<div>
    		<MessageList messages={this.state.messages} />
    		<ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} />
    	</div>
  	);
  }
}

export default App;
