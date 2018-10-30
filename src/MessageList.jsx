import React, {Component} from 'react';
import Message from "./Message.jsx";

const messages = [
  {
    type: "incomingMessage",
    content: "I won't be impressed with technology until I can download food.",
    username: "Anonymous1"
  }
];

// generate container for all messages
class MessageList extends Component {
	constructor(props) {
		super();
		this.state = { messages }
	}

	render() {
		const messageList = this.state.messages.map(m => (
					<Message type={m.type} content={m.content} username={m.username} />
			));
		return (
				<main className="messages">
					{messageList}
				</main>
			);
	}
}

export default MessageList;