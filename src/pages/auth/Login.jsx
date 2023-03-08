import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { auth } from "../../firebase/firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggin, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoggedIn(false);
        toast.success("Login Sucessfull...");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoggedIn(false);
      });
    navigate("/");
  };

  return (
    <>
      {isLoggin && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="login" />
        </div>
        <div className={`${styles.form} --card`}>
          <h2>Login</h2>
          <form onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Login
            </button>
            <div className={styles.links}>
              <Link to="/reset">forgot password</Link>
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
    </>
  );
};

export default Login;
