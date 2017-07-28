import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 1
    }

    this._handleAddToOrder = this._handleAddToOrder.bind(this);
    this._handleQty = this._handleQty.bind(this);
  }

  _handleAddToOrder(event) {
    event.preventDefault();
    this.props.handleAddToOrder({
      name: this.props.item.dish,
      price: this.props.item.price,
      qty: this.state.qty
    });
  }

  _handleQty(event) {
    this.setState({
      qty: event.target.value
    })
  }

  render() {
    return(
      <div className="card">
        <p>{ this.props.item.dish }</p>
        <p>{ this.props.item.description }</p>
        <div className="flex">
          <p>${ this.props.item.price }</p>
          <select onChange={ this._handleQty } className="btn">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={ this._handleAddToOrder } className="btn">Add to Order</button>
        </div>
      </div>
    )
  }
}
