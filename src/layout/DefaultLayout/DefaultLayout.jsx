import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./styles.scss";

const DefaultLayout = () => {
  return (
    <div className="LayoutContainer">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
