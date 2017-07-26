import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="card">
        <p className="left-align">{ this.props.item.dish }</p>
        <p className="left-align">{ this.props.item.description }</p>
        <p className="center-align">${ this.props.item.price }</p>
      </div>
    )
  }
}
