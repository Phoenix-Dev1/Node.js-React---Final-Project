import React from 'react';
import styles from './Header.module.css';
import { NavItem, NavLink } from './NavItem/NavItem';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Your logo component or image goes here */}
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <NavItem showDesktop>
            <NavLink href="/docs">Docs</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/tutorials">Tutorials</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/releases">Releases</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/addons">Addons</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
