import React, {Component} from 'react';

// bottom bar for creating/sending new messages
class ChatBar extends Component {

	constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
   }

	keyPress(e){
  	if(e.keyCode == 13){
  		const newMessage = {
  			type: 'incomingMessage',
  			content: e.target.value,
  			username: this.props.currentUser
  		}
     	this.props.addMessage(newMessage)
     	e.target.value = "";
    }
	}

	render() {
		const placeholderMessage = `Send a message as ${this.props.currentUser}`;
		return (
			<footer className="chatbar">
  			<input className="chatbar-username" placeholder="Your Name (Optional)" />
  			<input className="chatbar-message" onKeyDown={this.keyPress} placeholder={placeholderMessage} />
			</footer>
			)
	}
}

export default ChatBar;