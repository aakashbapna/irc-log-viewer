import React from 'react';
import FluxComponent from 'flummox/component';
import MessageList from './MessageList';

export default class MessagesView extends React.Component {

  render() {
    return (
      <FluxComponent flux={this.props.flux} connectToStores={['messages']}>
        <MessageList />
      </FluxComponent>
    );
  }

}
