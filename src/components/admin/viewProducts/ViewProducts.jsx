import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./view.module.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../firebase/firebase.config";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS } from "../../../store/slice/productSlice";
import useFetchColletion from "../../../Hooks/useFetchColletion";

const ViewProducts = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchColletion("products");
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(STORE_PRODUCTS({ products: data }));
  }, [dispatch, data]);

  // const getProducts = () => {
  //   Loading(true);

  //   try {
  //     const ProductRef = collection(db, "products");
  //     const q = query(ProductRef, orderBy("createdAt", "desc"));
  //     onSnapshot(q, (snapshot) => {
  //       const allProducts = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setProducts(allProducts);
  //       setLoading(false);
  //       dispatch(STORE_PRODUCTS({ products: allProducts }));
  //     });
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      "Delete Product!!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageURL);
      },
      function cancelCb() {
        console.log("Delete Canceled");
      },
      {
        width: "520px",
        borderRadius: "3px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteProduct = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, "products", id));

      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
      toast.success("Product deleted successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        <h4>View All Products</h4>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>S/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {products.map((product, index) => {
              const { id, name, category, price, imageURL } = product;

              return (
                <tbody key={id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>${price}</td>
                    <td className={styles.icons}>
                      <Link to={`/admin/add-product/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>
                      &nbsp;
                      <FaTrash
                        size={20}
                        color="red"
                        onClick={() => confirmDelete(id, imageURL)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default ViewProducts;
