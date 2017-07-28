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
    let qty = Number(event.target.value);
    this.setState({
      qty
    })
  }

  render() {
    return(
      <div className="card flex">
        <div className="flex-grow">
          <p className="dish">{ this.props.item.dish }</p>
          <p className="description">{ this.props.item.description }</p>
        </div>
        <div className="flex center-flex">
          <p className="price">${ this.props.item.price }</p>
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
