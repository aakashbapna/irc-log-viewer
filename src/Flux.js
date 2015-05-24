import {Flux} from 'flummox';
import MessageStore from './stores/MessageStore'
import MessageActions from './actions/MessageActions'

export default class AppFlux extends Flux {
	constructor() {
		super();

    this.createActions('messages', MessageActions);

    // The extra argument(s) are passed to the MessageStore constructor
    this.createStore('messages', MessageStore, this);
	}
}
