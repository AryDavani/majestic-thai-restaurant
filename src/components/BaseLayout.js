import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeImg from './HomeImg';

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
