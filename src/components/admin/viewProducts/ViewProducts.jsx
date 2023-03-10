import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./view.module.scss";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const ViewProducts = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);

    try {
      const ProductRef = collection(db, "products");
      const q = query(ProductRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(allProducts);
        setProducts(allProducts);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        <h4>View All Products</h4>
        {product.length === 0 ? (
          <p>No products found</p>
        ) : (
          <table>
            <tr>
              <th>S/n</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {product.map((product, index) => {
              const { id, name, category, price, imageURL } = product;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={imageURL} alt={name} style={{ width: "100px" }} />
                  </td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>${price}</td>
                  <td>
                    <Link to="/admin/add-product">
                      <FaEdit />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default ViewProducts;
