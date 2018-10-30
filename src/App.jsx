import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

const messages = [
  {
    type: "incomingMessage",
    content: "I won't be impressed with technology until I can download food.",
    username: "Anonymous1"
  }
];

const currentUser = 'landen';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { messages, currentUser: currentUser || 'Anonymous' };
	}

  render() {
    return (
    	<div>
    		<MessageList messages={messages} />
    		<ChatBar currentUser={this.state.currentUser} />
    	</div>
  	);
  }
}
export default App;
