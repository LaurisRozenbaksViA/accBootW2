import React from 'react';
import { Link } from 'react-router';
import Logo from './logo.jsx'

class Menu extends React.Component{
  render(){
    return (
      <div className = "nav-cont">
        <Logo />
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/bio">bio</Link></li>
          <li><Link to="/discography">discography</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
