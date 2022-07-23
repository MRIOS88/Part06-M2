import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <Link to='/'>
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
          </Link>
        </span>
        <Link to='/about'>
          <span>About</span>
        </Link >
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
