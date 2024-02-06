import React from 'react';
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/Navbar';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopCategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import LogInSignUp from './pages/logIn/LogInSignUp';

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}/>
            <Route path=':productId' element={<Product/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogInSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
