import {Store} from 'flummox';

export default class MessageStore extends Store {
	constructor(flux) {
		super();

		const message_actions = flux.getActionIds('messages');

		this.register(message_actions.fetchMessages, this.handleData);

		this.state = {
			messages: null
		};
	}

	handleData(data) {
		console.log("got data", data)
		this.setState({messages: data.rows});
	}
}
