import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <Link to='/menu/meals'>MEALS</Link>
        <Link to='/menu/special-offers'>SPECIAL OFFERS</Link>
        <Link to='/menu/beverages'>BEVERAGES</Link>
        <Link to='/menu/sandwiches'>SANDWICHES</Link>
        <Link to='/menu/side-dishes'>SIDE DISHES</Link>
        <Link to='/menu/salads'>SALADS</Link>
        <Link to='/menu/accessories'>ACCESSORIES</Link>
      </ul>
    </div>
  );
};

export default Menu;
