import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import OrderHistoryPage from "./pages/orderHistory/OrderHistory";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "./store/slice/authSlice";
import Admin from "./pages/admin/Admin";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductsDetails from "./components/products/productDetails/ProductsDetail";
import Checkout from "./pages/checkout/Checkout";
import CheckoutDetails from "./pages/checkout/checkoutDetails/CheckoutDetails";
import CheckoutSucess from "./pages/checkout/CheckoutSucess/CheckoutSucess";
import OrderDetails from "./pages/orderDerails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          dispatch(
            SET_ACTIVE_USER({
              email: user.email,
              userName: uName,
              userId: user.uid,
            })
          );
        } else {
          dispatch(
            SET_ACTIVE_USER({
              email: user.email,
              userName: user.displayName,
              userId: user.uid,
              photo: user.photoURL,
            })
          );
        }
      } else {
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/product-details/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-details" element={<CheckoutDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSucess />} />
            <Route
              path="/checkout-success/order-history"
              element={<OrderHistoryPage />}
            />
            <Route path="/order-details/:id" element={<OrderDetails />} />
            <Route path="/review-product/:id" element={<ReviewProducts />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/admin/*"
              element={
                <AdminOnlyRoute>
                  <Admin />
                </AdminOnlyRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
