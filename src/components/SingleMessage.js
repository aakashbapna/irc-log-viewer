import React from 'react';
import ColorHash from 'color-hash'
import humanized_time_span from '../lib/humanized_time_span'
let colorHash = new ColorHash();

let find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
var LinkedContent = React.createClass({
  render: function() {
    return <span>{this.linkify(this.props.children)}</span>
  },

  linkify: function(text) {
    var split = text.split(find_uri_expression);
    var result = [];
    for (var i = 0; i < split.length; ++i) {
      if (split[i] !== undefined) {
        if (i + 1 < split.length && split[i + 1] === undefined) {
          result.push(<a href={split[i]} target="_blank">{split[i]}</a>);
        } else {
          result.push(split[i]);
        }
      }
    }
    return result;
  }
});

export default class SingleMessage extends React.Component {
	render(){
    let message = this.props.message;
    let message_date = new Date(message.date);

		return <div className="message">
			<div className="line">
        <div className="unit user" style={{color:colorHash.hex(message.user.name)}}><strong>{message.user.name}</strong></div>
        <div className="unitExt time text-size-s text-light">{humanized_time_span(message.date)}</div>
      </div>
      <div className="text">
        <LinkedContent>{message.text}</LinkedContent>
      </div>
		</div>
	}
}
