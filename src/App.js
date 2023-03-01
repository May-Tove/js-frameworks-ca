import Layout from "./components/layout/index.jsx";
import { Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  Product,
  Checkout,
  PageNotFound,
} from "./pages/index.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
