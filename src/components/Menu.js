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
      order: {
        total: 0,
        items: []
      },
      category: 'Appetizers'
    }

    // this._handleYourOrder = this._handleYourOrder.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._handleAddToOrder = this._handleAddToOrder.bind(this);

  }

  // _handleYourOrder(event) {
  //   event.preventDefault();
  //
  // }

  _handleSelect(event) {
    this.setState({
      category: event.target.value
    });
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

    });

    return(
      <div className="menu">
        <div className="menu-nav">
          <input value="Appetizers" type="button" onClick={ this._handleSelect } />
          <input value="Entrees" type="button" onClick={ this._handleSelect } />
          <input value="Desserts" type="button" onClick={ this._handleSelect } />
          <Link to="/order"><button className="order-btn" onClick={ this._handleYourOrder }>Place Order {this.state.order.items.length}</button></Link>
        </div>
        <div className="menu-display">
          { categoryItems }
        </div>
      </div>

    )
  }
}
