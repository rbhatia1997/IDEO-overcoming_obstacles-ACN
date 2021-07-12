import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}> PWD Portal </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Careers Page</Link>
          </li>
          <li>
            <Link to="/career-support">Career Support</Link>
          </li>
          <li>
            <Link to="/app-assist">Application Assistant</Link>
          </li>
          <li>
            <Link to="/help">Submission Help </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
