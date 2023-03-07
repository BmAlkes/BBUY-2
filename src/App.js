import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import RegisterPage from "./pages/register/Register";
import OrderHistoryPage from "./pages/orderHistory/OrderHistory";
import LoginPage from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
