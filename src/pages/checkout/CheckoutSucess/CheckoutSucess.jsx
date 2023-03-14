import React from "react";
import { Link } from "react-router-dom";

const CheckoutSucess = () => {
  return (
    <div className="container">
      <h2>Checkout Sucessful</h2>
      <p>Thank you for your purchase</p>
      <br />
      <Link to="order-history">
        <button className="--btn --btn-primary">View order history</button>
      </Link>
    </div>
  );
};

export default CheckoutSucess;
