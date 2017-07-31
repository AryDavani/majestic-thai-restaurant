import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor() {
    super();

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

    this._handleYourOrder = this._handleYourOrder.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._handleAddToOrder = this._handleAddToOrder.bind(this);

  }

  _handleYourOrder() {

    console.log("this is", this);
  }

  _handleSelect(event) {
    console.log(this.state.displayOrder);
    if (event.target.value == "Order") {
      this.setState({
        displayOrder: true
      })
      console.log("order button clicked");
    } else {
      this.setState({
        category: event.target.value
      });
    }
  }

  _handleAddToOrder(menuItem) {
    let price = (Number(menuItem.price) * menuItem.qty);
    let total = this.state.order.total;
    let items = this.state.order.items;

    items.push(menuItem);
    total += price;

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
    let that = this;

    let categoryItems = this.state.menu[this.state.category].map(function(item){
      return <MenuItem key={ item.dish } item={ item } handleAddToOrder={ that._handleAddToOrder }/>

    // let orderItems = this.state.order.items.map(function(index, item) {
    //   return <Order key={ index }
    // })

    });

    return(
      <div className="menu">
        <div className="menu-nav">
          <input value="Appetizers" type="button" onClick={ this._handleSelect } />
          <input value="Entrees" type="button" onClick={ this._handleSelect } />
          <input value="Desserts" type="button" onClick={ this._handleSelect } />
          <button value="Order" className="order-btn" onClick={ this._handleSelect }>Place Order {this.state.order.items.length}</button>
        </div>
        <div className="menu-display">
          { categoryItems }
        </div>
      </div>
    )
  }
}
