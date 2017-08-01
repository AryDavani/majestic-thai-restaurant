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
        items: [0]
      },
      displayOrder: false
    }

// binding custom methods to 'this'
    // this._handleYourOrder = this._handleYourOrder.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._handleAddToOrder = this._handleAddToOrder.bind(this);

  }

  // _handleYourOrder() {
  //
  //   console.log("this is", this);
  // }

  _handleSelect(event) {

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
      console.log('menu', this.state);
    }
  }

  _handleAddToOrder(menuItem) {

    let price = (Number(menuItem.price) * menuItem.qty);
    let total = this.state.order.total;
    let items = this.state.order.items;

    items.push(menuItem);

    total += price
    total.toFixed([2]);
    console.log("total", total);

    this.setState({
      order: {
        total,
        items
      }
    })
  }

  componentDidMount(){
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        menu: data[0]
      });
    })
  }

  render() {
    console.log(this.state.order.items);

    let that = this;

    let categoryItems = this.state.menu[this.state.category].map((item) => {
      return <MenuItem key={ item.dish } item={ item } handleAddToOrder={ that._handleAddToOrder }/>

    });

    let orderItems = this.state.order.items.map((index, item) => {
      let randNum = Math.random();

      return (
       <div key={ randNum }>
         
       </div>
      )
    })


    return(
      <div className="menu">
        <div className="menu-nav">
          <input value="Appetizers" type="button" onClick={ this._handleSelect } />
          <input value="Entrees" type="button" onClick={ this._handleSelect } />
          <input value="Desserts" type="button" onClick={ this._handleSelect } />
          <button value="Order" className="order-btn" onClick={ this._handleSelect }>Place Order {this.state.order.items.length}</button>
        </div>
        <div className="menu-display">
          { this.state.displayOrder ? orderItems : categoryItems }
        </div>
      </div>
    )
  }
}
