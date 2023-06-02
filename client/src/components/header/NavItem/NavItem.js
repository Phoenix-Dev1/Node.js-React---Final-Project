import React from 'react';
import styles from '../Header.module.css';

const NavItem = ({ ShowLink, children }) => {
  return (
    <li className={ShowLink ? styles.navItemDesktop : styles.navItem}>
      {children}
    </li>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
};

export { NavItem, NavLink };
