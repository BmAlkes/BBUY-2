import React from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="login" />
      </div>
      <div className={`${styles.form} --card`}>
        <h2>Reset Password</h2>
        <form>
          <input type="text" placeholder="Email" required />
          <button className="--btn --btn-primary --btn-block">
            Reset password
          </button>
          <div className={styles.links}>
            <Link to="/login">-Login</Link>
            <Link to="/register">-Register</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reset;
