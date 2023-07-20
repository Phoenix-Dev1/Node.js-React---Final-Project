import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ header, fields, handleSubmit, footer, isRegister, error }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputs);
  };

  const buttonText = isRegister ? 'Register' : 'Login';

  return (
    <form onSubmit={onSubmit}>
      {header}
      {fields.map((field) => (
        <input
          key={field.name}
          onChange={handleChange}
          className={field.className}
          type={field.type}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      {error && <p className={styles.errorMessage}>{error}</p>}
      {footer && <p>{footer}</p>}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
