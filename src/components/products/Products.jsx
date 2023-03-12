import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../Hooks/useFetchColletion";
import { STORE_PRODUCTS } from "../../store/slice/productSlice";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import styles from "./products.module.scss";
import Loader from "../loader/Loader";

const Products = () => {
  const { data, isLoading } = useFetchCollection("products");
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    dispatch(STORE_PRODUCTS({ products: data }));
  }, [dispatch, data]);
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <ProductFilter />
        </aside>
        <div className={styles.content}>
          {isLoading ? <Loader /> : <ProductList products={products} />}
        </div>
      </div>
    </section>
  );
};

export default Products;
