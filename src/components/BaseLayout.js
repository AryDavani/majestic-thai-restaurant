import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class BaseLayout extends React.Component {
  constructor() {

  }
  render(){
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}
