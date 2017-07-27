import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="card">
        <p>{ this.props.item.dish }</p>
        <p>{ this.props.item.description }</p>
        <p>${ this.props.item.price }</p>
      </div>
    )
  }
}
