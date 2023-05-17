import React from "react";
import { logoItex } from "../assets/images";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles["hell"]}>
      <header className={styles["header"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["logo"]}>
            <img src={logoItex} />
          </div>
          <div className={styles["header-text"]}>ITEXC AGENCY</div>
        </div>
      </header>
    </div>
  );
};
export default Header;
