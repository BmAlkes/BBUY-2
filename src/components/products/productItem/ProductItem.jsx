import React from "react";
import styles from "./productItem.module.scss";
import Card from "../../card/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../../store/slice/cartSlice";

const ProductItem = ({
  id,
  name,
  desc,
  brand,
  imageURL,
  price,
  grid,
  product,
}) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(ADD_TO_CART(product));
  };

  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt="" />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          <h4>{shortenText(name, 12)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 50)}</p>}
        <button
          className="--btn --btn-primary"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
