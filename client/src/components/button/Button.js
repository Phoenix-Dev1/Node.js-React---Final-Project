import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return <button onClick={props.fun}>{props.name}</button>;
};

export default Button;
