import React, {Component} from 'react';

// todo: change styles based on sender of message (all system notifications are sent by 'system')

function Message(props) {
	// regular message
	if (props.type === 'incommingMessage') {
		return(
			<div className='message'>
    		<span className='message-username'>{props.username}</span>
    		<span className='message-content'>{props.content}</span>
			</div>
		);
		// system alerts (such as username changes)
	} else if (props.type === 'incommingNotification') {
		return(
			<div className='message system'>
				{props.content}
  		</div>
		);
	}
}

export default Message;