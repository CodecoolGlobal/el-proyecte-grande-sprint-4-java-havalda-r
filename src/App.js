import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/builder' exact element={<h1>BUILDER</h1>} />
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
        <Route
          path='/promotions'
          exact
          element={
            <div>
              <h1>Promotions page</h1>
            </div>
          }
        />
        <Route
          path='/'
          exact
          element={
            <div>
              <h1>Home page</h1>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
