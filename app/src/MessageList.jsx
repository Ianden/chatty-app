import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

	// todo; add className = {style}
	render() {
		const messages = this.props.messages;
		const messageList = messages.map(m => (
					<Message key={m.id} type={m.type} content={m.content} username={m.username} />
			));
		return (
				<main className='messages'>
					{messageList}
				</main>
			);
	}
}

export default MessageList;