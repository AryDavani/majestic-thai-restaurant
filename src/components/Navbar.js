import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/elephant-logo2.png';


export default class Navbar extends Component {

  render(){
    return (
      <nav className="fixed-nav flex">
        <NavLink to="/"><img className="logo" src={Logo} alt="logo"/></NavLink>
        <div className="center-nav">
          <NavLink activeClassName="selected" to="/about">About</NavLink>
          <NavLink activeClassName="selected" to="/menu">Menu</NavLink>
          <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
        </div>
      </nav>
    )
  }
}
