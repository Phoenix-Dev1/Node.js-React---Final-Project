import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.logo} />;
};

export default Logo;
