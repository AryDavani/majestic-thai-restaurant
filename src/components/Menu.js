import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      categoryItems: []
    }

    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(event) {

    this.setState({
      categoryItems: this.state.menu[event.target.value]
    });
  }

  componentDidMount(){
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        menu: data[0],
        categoryItems: data[0].Appetizers
      });
      console.log("state", this.state.menu);
    })
  }

  render() {
    console.log("second log", this.state.menu);

    let categoryItems = this.state.categoryItems.map(function(item){
      return <MenuItem key={ item.dish } item={ item } />
    });

    return(
      <div>
        <input value="Appetizers" type="button" onClick={ this._handleSelect } />
        <input value="Entrees" type="button" onClick={ this._handleSelect } />
        <div className="flex">
          { categoryItems }
        </div>
      </div>

    )
  }
}
