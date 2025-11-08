import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img
        src="/logo-dropsland.png"
        alt="Dropsland"
        className={styles.logoImage}
      />
    </Link>
  );
};

export default HeaderLogo;
