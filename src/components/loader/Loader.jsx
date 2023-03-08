import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import styles from "./loader.module.scss";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <SyncLoader color="#36d7b7" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
