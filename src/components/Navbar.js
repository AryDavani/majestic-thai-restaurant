import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/elephant-logo2.png';
import PROJECT_URI from '../utility';


export default class Navbar extends Component {

  render(){
    return (
      <nav className="fixed-nav flex">
        <NavLink to={PROJECT_URI + "/"}><img className="logo" src={Logo} alt="logo"/></NavLink>
        <div className="center-nav">
          <NavLink activeClassName="selected" to={PROJECT_URI + "/about"}>About</NavLink>
          <NavLink activeClassName="selected" to={PROJECT_URI + "/menu"}>Menu</NavLink>
          <NavLink activeClassName="selected" to={PROJECT_URI + "/contact"}>Contact</NavLink>
        </div>
      </nav>
    )
  }
}
