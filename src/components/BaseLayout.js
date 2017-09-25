import React, {Component} from 'react';
import Navbar from './Navbar';

export default class BaseLayout extends Component {

  render(){
    return (
      <div>
        <Navbar />
          {this.props.children}
      </div>
    )
  }
}
