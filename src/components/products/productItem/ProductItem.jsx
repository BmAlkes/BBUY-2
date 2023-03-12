import React from "react";
import styles from "./productItem.module.scss";
import Card from "../../card/Card";
import { Link } from "react-router-dom";

const productItem = ({ id, name, desc, brand, imageURL, price, grid }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
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
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}
        <button className="--btn --btn-primary">Add to cart</button>
      </div>
    </Card>
  );
};

export default productItem;