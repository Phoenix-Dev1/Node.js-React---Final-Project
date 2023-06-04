import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import styles from './Header.module.css';
import { NavItem, NavLink } from './NavItem/NavItem';
import Logo from './logo';
import EcLogo from '../../images/sm-logo.png';

const Header = () => {
  // Show user name
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo src={EcLogo} alt="Eco Colletors" />
        {currentUser && (
          <li className={styles.userName}>{currentUser.username}</li>
        )}
        {!currentUser && (
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
        )}
        {currentUser ? (
          <NavItem>
            <NavLink href="/">
              <li onClick={logout}>Logout</li>
            </NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        )}
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/releases">Recycle Bins Locations</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
