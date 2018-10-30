import React, {Component} from 'react';

// message container
function Message(props) {
	// regular incomming message from a user
	if (props.type === 'incomingMessage') {
		return(
			<div className="message">
    		<span className="message-username">{props.username}</span>
    		<span className="message-content">{props.content}</span>
			</div>
		);
		// system alerts (such as username changes)
	} else if (props.type === 'incomingNotification') {
		return(
			<div className="message system">
				{props.content}
  		</div>
		);
	}
}

export default Message;