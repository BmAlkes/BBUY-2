import React from "react";
import styles from "./productDetails.module.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchDocument from "../../../Hooks/useFetchDocument";
import spinnerImg from "../../../assets/spinner.jpg";
import Card from "../../card/Card";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  // const cartItems = useSelector(state=> state.);
  const { document } = useFetchDocument("products", id);
  // const { data } = useFetchCollection("reviews");
  // const filteredReviews = data.filter((review) => review.productID === id);

  // const cart = cartItems.find((cart) => cart.id === id);
  // const isCartAdded = cartItems.findIndex((cart) => {
  //   return cart.id === id;
  // });
  console.log(document);
  useEffect(() => {
    setProduct(document);
  }, [document]);

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; Back To Products</Link>
        </div>
        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{`$${product.price}`}</p>
                <p>{product.desc}</p>
                <p>
                  <b>SKU</b> {product.id}
                </p>
                <p>
                  <b>Brand</b> {product.brand}
                </p>

                <div className={styles.count}>
                  {/* {isCartAdded < 0 ? null : (
                    <>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>{cart.cartQuantity}</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </>
                  )} */}
                </div>
                <button className="--btn --btn-danger">ADD TO CART</button>
              </div>
            </div>
          </>
        )}
        <Card cardClass={styles.card}>
          <h4>Product Reviews</h4>
          <div>
            {/* {filteredReviews.length === 0 ? (
              <p>There are no reviews for this product yet.</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <div key={index} className={styles.review}>
                      <StarsRating value={rate} />
                      <p>{review}</p>
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <br />
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </div>
                  );
                })}
              </>
            )} */}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductsDetails;
