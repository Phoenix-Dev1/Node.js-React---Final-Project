import React from 'react';
import Button from '../../components/button/Button';
import styles from './Register.module.css';

function RegisterForm() {
  return (
    <main>
      <form className={styles.form}>
        <h1>Register Form</h1>
        <input
          className={styles.dataInputs}
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          required
        />
        <input
          className={styles.dataInputs}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.dataInputs}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          className={styles.dataInputs}
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <input
          className={styles.dataInputs}
          type="text"
          id="city"
          name="city"
          placeholder="City"
          required
        />
        <input
          className={styles.dataInputs}
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          required
        />
        <input
          className={styles.dataInputs}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
        />
        <Button name="Register Now" />
      </form>
    </main>
  );
}

export default RegisterForm;
