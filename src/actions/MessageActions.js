import {Actions} from 'flummox';
var COUCHDB_BASE_URL = "http://hillhacks-irc.iriscouch.com:5984/irc/_design/viewer/_view/messages?reduce=false&include_docs=true&descending=true"

let getMessagesFromDB = function() {
	return fetch(COUCHDB_BASE_URL,{
		method: "GET"
	})
	.then(resp => {
		if (resp.status !== 200) {
			return resp.json().then(bodyJson => {
				return Promise.reject(
					new Error('Error in Fetch Call', resp.status, bodyJson)
				);
			});
		}
		return resp.json();
	})
	.catch(err => {
		return Promise.reject(err);
	});
};

export default class MessageActions extends Actions {
	async fetchMessages() {
		try {
			return await getMessagesFromDB();
		} catch(e) {
			console.log(e.stack);
			throw e;
		}
	}
}
