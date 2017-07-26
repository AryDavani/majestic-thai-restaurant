import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class BaseLayout extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div>
        <Navbar />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
