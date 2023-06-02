import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.Footer}
    >{`Copyright © Bar Kaziro & Liran Barzilay ${year}`}</footer>
  );
};

export default Footer;
