import React from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={`${styles.form} --card`}>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Enter email" required />
          <input type="password" placeholder="Enter password" required />
          <input type="password" placeholder="confirm password" required />
          <button className="--btn --btn-primary --btn-block">Register</button>
        </form>
        <span className={styles.register}>
          <p>Already an account?</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
      <div className={styles.img}>
        <img src={registerImg} alt="login" />
      </div>
    </section>
  );
};

export default Register;
