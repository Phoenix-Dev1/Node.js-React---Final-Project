import React from 'react';
import styles from '../Header.module.css';

export const NavItem = ({ ShowLink, children }) => {
  return (
    <div className={ShowLink ? styles.ShowLink : styles.navItem}>
      {children}
    </div>
  );
};

export const NavLink = ({ href, children }) => {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
};
