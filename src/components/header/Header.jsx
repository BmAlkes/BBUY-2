import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { BsCart } from "react-icons/bs";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AdminOnlyLink } from "../adminOnlyRoute/AdminOnlyRoute";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        B<span>BUY</span>.
      </h2>
    </Link>
  </div>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);
  const navigate = useNavigate();
  const { userName, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);

  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const totalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  console.log(totalQuantity);
  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUserOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logut sucess");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <BsCart size={16} />
        <p>{totalQuantity}</p>
      </Link>
    </span>
  );
  return (
    <>
      <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
          {logo}

          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
              <li>
                <AdminOnlyLink>
                  <Link to="/admin/home">
                    <button className="--btn --btn-primary">Admin</button>
                  </Link>
                </AdminOnlyLink>
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              {!isLoggedIn && (
                <span className={styles.links}>
                  <NavLink to="/login">Login</NavLink>
                </span>
              )}
              <span className={styles.links}>
                <a href="#home" style={{ color: "#ff7722" }}>
                  <FaUserCircle size={16} />
                  Hello, {userName ? userName : "Guest"}
                </a>

                {isLoggedIn && (
                  <>
                    <NavLink to="/order-history">My Orders</NavLink>
                    <NavLink onClick={logoutUserOut}>Logout</NavLink>
                  </>
                )}
              </span>

              {cart}
            </div>
          </nav>

          <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
