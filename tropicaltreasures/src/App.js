import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import { ShopCategory } from "./pages/ShopCategory.jsx";
import { Product } from "./pages/Product.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path=":productId" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
