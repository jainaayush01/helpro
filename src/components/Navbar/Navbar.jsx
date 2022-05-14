import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";
// import Logo from "../Logo/Logo";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>Helpro</div>
      <div className={styles.rightNav}>
        <div className={styles.rightNavBtn} onClick={() => navigate("/jobs")}>
          Jobs
        </div>
        <div
          className={styles.rightNavBtn}
          onClick={() => navigate("/internships")}
        >
          Internships
        </div>
        <div
          className={styles.rightNavBtn}
          onClick={() => navigate("/hackathons")}
        >
          Hackathons
        </div>
        <div
          className={styles.rightNavBtn}
          onClick={() => navigate("/promote")}
        >
          Promote
        </div>
      </div>
    </header>
  );
};

export default Navbar;
