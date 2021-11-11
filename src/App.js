import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Builder from './components/Builder/Builder';

function App() {
  const [cart, setCart] = useState(null);

  return (
    <Layout>
      <Routes>
        <Route path='/builder' exact element={<Builder />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/menu/meals' exact element={<h1>MEALS</h1>} />
        <Route
          path='/menu/special-offers'
          exact
          element={<h1>SPECIAL OFFERS</h1>}
        />
        <Route path='/menu/beverages' exact element={<h1>BEVERAGES</h1>} />
        <Route path='/menu/sandwiches' exact element={<h1>SANDWICHES</h1>} />
        <Route path='/menu/side-dishes' exact element={<h1>SIDE-DISHES</h1>} />
        <Route path='/menu/salads' exact element={<h1>SALADS</h1>} />
        <Route path='/menu/accessories' exact element={<h1>ACCESSORIES</h1>} />
        <Route path='/cart' exact element={<Cart cart={cart} />} />
        <Route
          path='/promotions'
          exact
          element={
            <div>
              <h1>Promotions page</h1>
            </div>
          }
        />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
