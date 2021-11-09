import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div>LOGO</div>
      </Link>
      <Link to='/menu'>
        <div>MENU</div>
      </Link>
      <Link to='/promotions'>
        <div>PROMOTIONS</div>
      </Link>
      <div>LOGIN</div>
    </header>
  );
};

export default Header;
