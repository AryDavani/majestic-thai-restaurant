import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this._handleAddToOrder = this._handleAddToOrder.bind(this);
  }

  _handleAddToOrder(event) {
    event.preventDefault();
    this.props.handleAddToOrder({
      name: this.props.item.dish,
      price: this.props.item.price,
      qty: 1
    });
  }

  render() {
    return(
      <div className="card">
        <p>{ this.props.item.dish }</p>
        <p>{ this.props.item.description }</p>
        <div className="flex">
          <p>${ this.props.item.price }</p>
          <button onClick={ this._handleAddToOrder } className="btn">Add to Order</button>
        </div>
      </div>
    )
  }
}
