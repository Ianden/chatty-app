import React, {Component} from 'react';
import Message from "./Message.jsx";

// generate container for all messages
class MessageList extends Component {

	render() {
		const messages = this.props.messages;
		const messageList = messages.map(m => (
					<Message key={m.id} type={m.type} content={m.content} username={m.username} />
			));
		return (
				<main className="messages">
					{messageList}
				</main>
			);
	}
}

export default MessageList;