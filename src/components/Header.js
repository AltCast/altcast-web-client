import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {

    return (
      <div className="Header">
        <div className="left-menu">
          <img src={logo} className="Header-logo" alt="AltCast Dashboard Logo" />
        </div>
        <div className="right-menu">
          <p>menu aqui</p>
        </div>
      </div>
    );
  }
}

export default Header;
