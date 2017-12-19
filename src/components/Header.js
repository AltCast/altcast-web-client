import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    let icon = <img src={logo} className="Header-logo" alt="AltCast Dashboard Logo" />;

    return (
      <div className="Header">
      </div>
    );
  }
}

export default Header;
