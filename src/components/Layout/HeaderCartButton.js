import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button
      className={styles.button}
      type={props.button || "button"}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
