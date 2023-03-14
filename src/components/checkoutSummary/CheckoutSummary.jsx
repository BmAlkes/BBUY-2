import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import styles from "./styles.module.scss";

const CheckoutSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  return (
    <div>
      <h3>Checkout Summary</h3>
      <div>
        {cartItems.length === 0 ? (
          <>
            <p>No item in your cart</p>{" "}
            <button className="--btn">
              <Link to="/#products">Back to shop</Link>
            </button>
          </>
        ) : (
          <>
            <p>
              <b>{`Cart item(s): ${cartTotalQuantity}`}</b>
            </p>
            <div className={styles.text}>
              <h4>Subtotal:</h4>
              <h3>{cartTotalAmount.toFixed(2)}</h3>
            </div>
            {cartItems.map((item, index) => {
              return (
                <Card key={index} cardClass={styles.card}>
                  <h4>Product : {item.name}</h4>
                  <p>Quantity: {item.cartQuantity}</p>
                  <p>Unit price: {item.price}</p>
                  <p>Set price {item.price * item.cartQuantity}</p>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;
