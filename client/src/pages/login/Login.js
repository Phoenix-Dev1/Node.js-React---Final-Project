import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import RegisterForm from '../register/Register'; // Import the RegisterForm component

import styles from './Login.module.css';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [err, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterLinkClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(true);
  };

  return (
    <main>
      {showRegisterForm ? ( // Render the RegisterForm component if showRegisterForm is true
        <RegisterForm />
      ) : (
        <form className={styles.form}>
          <h1 className={styles.head}>Welcome to Eco Collectors!</h1>
          <h2 className={styles.head}>Please log in to continue</h2>
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
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          {err && <p className={styles.err}>{err}</p>}
          <button onClick={handleSubmit} type="submit">
            Login
          </button>
          <p className={styles.register}>
            Don't have an account?{' '}
            <a href="/" onClick={handleRegisterLinkClick}>
              Click here to register
            </a>
          </p>
        </form>
      )}
    </main>
  );
}

export default LoginForm;
