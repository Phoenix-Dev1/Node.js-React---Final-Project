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
          <NavItem showDesktop>
            <NavLink href="/docs">Link 1</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/tutorials">Link 2</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/releases">Link 3</NavLink>
          </NavItem>
          <NavItem showDesktop>
            <NavLink href="/addons">Link 4</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
