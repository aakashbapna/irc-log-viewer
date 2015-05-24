import React from 'react';
import SingleMessage from './SingleMessage'

export default class MessageList extends React.Component {

	componentDidMount(){
		this.props.flux.getActions('messages').fetchMessages();
	}

	render(){
		return <ul className="message-list unstyled">
			{this.props.messages && this.props.messages.map(message=> {
				return (
					<li key={message.id}><SingleMessage message={message.doc}/></li>
				)
			})}
      {this.props.messages == null? <li>loading...</li>: ""}
		</ul>
	}
}
