import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor() {
    super();

// setting default state
    this.state = {
      menu: {
        Appetizers: [],
        Entrees: [],
        Desserts: []
      },
      category: 'Appetizers',
      order: {
        total: 0,
        items: []
      },
      displayOrder: false
    }

  }

  _handleDelete = (event) => {
    console.log("delete pressed", event.target.value );
    let stateItems = this.state.order.items;
    let newItems = stateItems.splice(event.target.value, 1);
    let total = this.state.order.total - newItems[0].price;

    this.setState({
      order: {
        total: total,
        items: stateItems
      }
    })
  }

  _handleFormSubmit = (event) => {
    event.preventDefault();

    let object = {
      name: event.target.name.value,
      number: event.target.number.value,
      items: this.state.order.items,
      total: this.state.order.total.toFixed([2])
    }

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/reactthaiorders", {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      response.json();
    });

    event.target.reset();
  }

  _handleSelect = (event) => {

    if (event.target.value === "Order") {
      console.log("order button clicked");
      this.setState({
        displayOrder: true
      })
      console.log('order', this.state);
    } else {
      console.log("menu nav button clicked");
      this.setState({
        category: event.target.value,
        displayOrder: false
      });
    }
  }

  _handleAddToOrder = (menuItem) => {

    let price = (Number(menuItem.price) * menuItem.qty);
    let total = this.state.order.total;
    let items = this.state.order.items;

    items.push(menuItem);

    total += price
    total.toFixed([2]);

    this.setState({
      order: {
        total,
        items
      }
    })
  }

  _total = () => {
    return (
      <div className="card flex">
        <div className="flex-grow">
          <p className="dish total">Total</p>
        </div>
        <div className="flex center-flex">
          <p className="total">{ this.state.displayOrder ? "$" + this.state.order.total.toFixed([2]) : null }</p>
        </div>
      </div>
    )
  }

  _checkout = () => {
    return (
      <form className="order-form center-flex flex" onSubmit={ this._handleFormSubmit }>
        <div className="flex-grow">
          <label className="dish">Name</label>
          <input name="name" type="text" className="form-input" placeholder="First and Last" />
          <label className="dish">Tel. Number</label>
          <input name="number" type="tel" className="form-input" placeholder="1-(555)-555-5555" />
        </div>
        <button type="submit" className="order-btn">Submit Order</button>
      </form>
    )
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        menu: data[0]
      });
    })
  }

  render() {
    console.log("state items", this.state.order.items);

    let that = this;

    let categoryItems = this.state.menu[this.state.category].map((item) => {
      return <MenuItem key={ item.dish } item={ item } handleAddToOrder={ that._handleAddToOrder }/>
    });

    let orderItems = this.state.order.items.map((item, index) => {
      // console.log("map item", item);
      let randNum = Math.random();

      return (
        <div key={ index } className="card flex">
          <div className="flex-grow">
            <p className="dish">{ item.name }</p>
          </div>
          <div className="flex center-flex">
            <p className="qty">qty: { item.qty }</p>
            <p>${ item.price }</p>
            <button value={ index } onClick={ this._handleDelete } className="button delete">Delete</button>
          </div>
        </div>
      )
    })

    return(
      <div className="menu">
        <div className="menu-nav">
          <input className="input" value="Appetizers" type="button" onClick={ this._handleSelect } />
          <input className="input" value="Entrees" type="button" onClick={ this._handleSelect } />
          <input className="input" value="Desserts" type="button" onClick={ this._handleSelect } />
          <button value="Order" className="order-btn" onClick={ this._handleSelect }>Your Order {this.state.order.items.length}</button>
        </div>
        <div className="menu-display">
          { this.state.displayOrder ? orderItems : categoryItems }
        </div>
        <div className="menu-display">
          { this.state.displayOrder ? this._total() : null }
        </div>
        <div className="menu-display">
          { this.state.displayOrder ? this._checkout() : null }
        </div>
      </div>
    )
  }
}
