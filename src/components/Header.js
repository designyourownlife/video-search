import React from 'react';
import logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="ui container">
        <img className="ui centered medium image" src={logo} alt="logo"></img>
      </div>
    </div>
  )
}

export default Header
