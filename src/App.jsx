import React from 'react';
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/Navbar';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopCategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import LogInSignUp from './pages/logIn/LogInSignUp';
import Footer from './components/footer/Footer';
import men_banner from './assets/banner_men.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';


const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="/product" element={<Product />}/>
            <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogInSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
