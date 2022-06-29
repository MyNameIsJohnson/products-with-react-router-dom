import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" element={<Products />}></Route>
          {/*  path="/product-detail/:productId" is a dynamic segment */}
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
