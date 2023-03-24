import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="products" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;