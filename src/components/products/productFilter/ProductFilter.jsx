import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
} from "../../../store/slice/filterSlice";
import styles from "./productFilter.module.scss";

const ProductFilter = () => {
  const [category, setCategories] = useState("All");
  const [brand, setBrand] = useState("All");
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  const filteredProducts = (cat) => {
    setCategories(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [products, brand]);

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? `${styles.active}` : null}
              onClick={() => filteredProducts(cat)}
            >
              &#8250;{cat}
            </button>
          );
        })}
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
        <h4>Price</h4>
        <p>1500</p>
        <div className={styles.price}>
          <input
            type="range"
            name="price"
            value={"value"}
            min={100}
            max={1000}
          />
        </div>
        <br />
        <button className="--btn --btn-primary">Clear Filter</button>
      </div>
    </div>
  );
};

export default ProductFilter;
