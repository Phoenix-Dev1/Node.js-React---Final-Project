import React, { useState, useContext } from 'react';
import Button from '../../components/button/Button';
import { AuthContext } from '../../context/authContext';
import { validateForm } from './ValidateForm';
import styles from './Register.module.css';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
    address: '',
    phone: '',
    confirm_password: '',
  });

  // For displaying error for the user
  const [err, setError] = useState(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const { registered } = useContext(AuthContext);

  if (registrationComplete != null) {
    // console.log('User is Logged in');
  }

  // User Credentials
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submitting the register form
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null); // Reset the error state
    const isValid = validateForm(inputs, setError);
    if (isValid) {
      try {
        await registered(inputs);
        setRegistrationComplete(true);
      } catch (err) {
        setError(err.response.data);
      }
    }
  }

  return (
    <main>
      <form className={styles.form}>
        <h1>Register Form</h1>
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="text"
          id="city"
          name="city"
          placeholder="City"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          required
        />
        <input
          onChange={handleChange}
          className={styles.dataInputs}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
        />
        {err && <p className={styles.err}>{err}</p>}
        <Button name="Register" fun={handleSubmit} />
        <p className={styles.register}>
          Already have an account? <a href="/">Sign In</a>
        </p>
      </form>
    </main>
  );
}

export default RegisterForm;
