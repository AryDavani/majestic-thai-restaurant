import React, { Component } from 'react';

export default function Navbar() {
  return (
    <nav className="fixed-nav">
      <div className="center-nav">
        <a>About</a>
        <a>Menu</a>
        <a id="contact-nav">Contact</a>
      </div>
    </nav>
  )
}
