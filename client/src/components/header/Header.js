import React from 'react';
import styles from './Header.module.css';
import { NavItem, NavLink } from './NavItem/NavItem';
import Logo from './logo';
import EcLogo from '../../images/sm-logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo src={EcLogo} alt="Eco Colletors" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/releases">Link 3</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/addons">Link 4</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
