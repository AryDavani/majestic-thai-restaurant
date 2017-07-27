import React, { Component } from 'react';
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
      category: 'Appetizers'
    }

    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(event) {

    this.setState({
      category: event.target.value
    });
  }

  componentDidMount(){
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        menu: data[0]
      });
      console.log("state", this.state.menu);
    })
  }

  render() {
    console.log("second log", this.state.menu);

    let categoryItems = this.state.menu[this.state.category].map(function(item){
      return <MenuItem key={ item.dish } item={ item } />
    });

    return(
      <div>
        <div className="menu-nav">
          <input value="Appetizers" type="button" onClick={ this._handleSelect } />
          <input value="Entrees" type="button" onClick={ this._handleSelect } />
          <input value="Desserts" type="button" onClick={ this._handleSelect } />
        </div>
        <div className="menu-display">
          { categoryItems }
        </div>
      </div>

    )
  }
}
