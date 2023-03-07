import React from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login" />
      </div>
      <div className={`${styles.form} --card`}>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Enter email" required />
          <input type="password" placeholder="Enter password" required />
          <button className="--btn --btn-primary --btn-block">Login</button>
          <div className={styles.links}>
            <Link to="">forgot password</Link>
          </div>
          <p>-- or --</p>
        </form>
        <button className="--btn --btn-danger --btn-block">
          <BsGoogle size={20} style={{ margin: " 0 1rem" }} />
          Login with Google
        </button>
        <span className={styles.register}>
          <p>Don't have a account?</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
