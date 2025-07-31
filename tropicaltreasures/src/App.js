import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop.jsx";
import { LoginSignup } from "./pages/LoginSignup.jsx";
import { ShopCategory } from "./pages/ShopCategory.jsx";
import { Product } from "./pages/Product.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory category="kid" />}></Route>
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
