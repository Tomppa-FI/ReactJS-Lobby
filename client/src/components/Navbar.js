import React, { useState } from "react";
import {Link} from "react-router-dom";
import styles from "./css/Navbar.module.css";

export default () => {
  const [collapseMenu, setCollapseMenu] = useState(true);
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.brand}>ReactJS Lobby</span>
        <img className={styles.bars} src="../../bars.svg" onClick={() => setCollapseMenu(!collapseMenu)} />
        <div className={collapseMenu ? styles.menu__collapsed : styles.menu}>
          <Link to="/register" className={styles.link}>Sign Up</Link>
          <Link to="/login" className={styles.link}>Log In</Link>
        </div>
      </nav>
    </div>
  )
}
