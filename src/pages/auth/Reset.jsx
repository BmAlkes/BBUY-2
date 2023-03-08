import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const Reset = () => {
  const [email, setEmail] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("email sent");
      })
      .catch((error) => {
        toast.error("error sending password reset");
      });
  };

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="login" />
      </div>
      <div className={`${styles.form} --card`}>
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button className="--btn --btn-primary --btn-block" type="submit">
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
