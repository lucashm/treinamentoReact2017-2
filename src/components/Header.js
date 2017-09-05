import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
          <button onClick = {this.props.increaseFunction}>aumenta</button>
        </div>
    );
  }
}

export default Header;
