// Prelude
import 'babel-core/polyfill';
import BPromise from 'bluebird';
window.Promise = BPromise;
import {fetch} from 'whatwg-fetch';
window.fetch = fetch;
const __DEV__ = true;
const __PROD__ = !__DEV__;
if (__DEV__) {
	Promise.longStackTraces();
	Error.stackTraceLimit = Infinity;
}

import React from 'react';
import App from './src/components/App';
import Router from 'react-router';
import RouterContainer from './src/RouterContainer';
import MessagesView from './src/components/MessagesView';
let {
	DefaultRoute,
	Link,
	Route,
	RouteHandler
} = Router;

let container = document.createElement('div');
container.id = 'app';


let routes = (
	<Route name='app' path='/' handler={App}>
		<DefaultRoute handler={MessagesView}/>
	</Route>
);

RouterContainer.set(Router.create({ routes }));

window.addEventListener('DOMContentLoaded', function() {
	document.body.appendChild(container);
	RouterContainer.get().run(function(Handler) {
		React.render(<Handler/>, container);
	});
});
