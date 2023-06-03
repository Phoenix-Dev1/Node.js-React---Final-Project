import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

import styles from './Login.module.css';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [err, setError] = useState(null);

  // For displaying the current user name on screen - localStorage
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submitting the register from authContext
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calling the login function from
      await login(inputs);
      window.location.href = '/';
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <main>
      <form className={styles.form}>
        <h1>Login</h1>
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
      </form>
    </main>
  );
}

export default LoginForm;
