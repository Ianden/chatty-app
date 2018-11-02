// todo: align properly

import React, {Component} from 'react';

function Navigation(props) {
  return(
  	<div>
			<nav className='navbar'>
				<a href='/' className='navbar-brand'>Chatty</a>
				<span className='users-online'>Online: {props.connectedUsers}</span>
			</nav>
		</div>
  	)
}

export default Navigation;

