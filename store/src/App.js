import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Thankyou from "./Pages/Thankyou";
import Checkout from "./Pages/Checkout";
import RouteNotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="thankyou" element={<Thankyou />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
