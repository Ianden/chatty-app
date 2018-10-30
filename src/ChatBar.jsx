import React, {Component} from 'react';

// bottom bar for creating/sending new messages
function ChatBar(props) {
	const placeholderMessage = `Send a message as ${props.currentUser}`;
	return (
			<footer className="chatbar">
  			<input className="chatbar-username" placeholder="Your Name (Optional)" />
  			<input className="chatbar-message" placeholder={placeholderMessage} />
			</footer>
		)
}

export default ChatBar;