import React, { useEffect } from "react";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  const url = window.location.href;
  const scrollSection = () => {
    if (url.includes("#products")) {
      window.scrollTo({
        top: 1200,
        behavior: "smooth",
      });
      return;
    }
  };

  useEffect(() => {
    scrollSection();
  }, []);
  return (
    <div>
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
