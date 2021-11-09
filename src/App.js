import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path='/menu'
          exact
          element={
            <div>
              <h1>Menu page</h1>
            </div>
          }
        />
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
