import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="fixed-nav">
      <div className="center-nav">
        <NavLink activeClassName="selected" to="/about">About</NavLink>
        <NavLink activeClassName="selected" to="/menu">Menu</NavLink>
        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}
