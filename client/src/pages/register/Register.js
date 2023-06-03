import React from 'react';
import Button from '../../components/button/Button';
import styles from './Register.module.css';

function RegisterForm() {
  return (
    <main>
      <form className={styles.form}>
        <h1>Register Form</h1>
        <div className={styles.name}>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </div>
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
        <Button name="Register Now" />
      </form>
    </main>
  );
}

export default RegisterForm;
