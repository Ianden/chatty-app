import React, {Component} from 'react';

// bottom bar for creating/sending new messages
class ChatBar extends Component {

	constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendNameChange = this.sendNameChange.bind(this);
   }

  // todo: remove username, have all user state handled by server
	sendMessage(e){
  	if(e.keyCode == 13){
  		const newMessage = {
  			content: e.target.value,
  			username: this.props.currentUser.name
  		}
     	this.props.addMessage(newMessage)
     	e.target.value = '';
    }
	}

  // todo: remove username, have all user state handled by server
	sendNameChange(e){
  	if(e.keyCode == 13){
  		const newMessage = {
        // note: editing the 'change username' field is the same as invoking `/id value`
        // from the chat
  			content: '/id ' + e.target.value,
  			username: this.props.currentUser.name
  		}
     	this.props.addMessage(newMessage)
     	e.target.value = '';
    }
	}

  // beans and carrots
	render() {
		const placeholderMessage = `Send a message as ${this.props.currentUser.name}.`;
		return (
			<footer className='chatbar'>
  			<input className='chatbar-username' onKeyDown={this.sendNameChange} placeholder='Enter a new identity.' />
  			<input className='chatbar-message' onKeyDown={this.sendMessage} placeholder={placeholderMessage} />
			</footer>
			)
	}
}

export default ChatBar;