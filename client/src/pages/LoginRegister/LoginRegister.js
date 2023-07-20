import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Form from '../../components/Form/Form';
import { validateForm } from './ValidateForm';
import styles from './LoginRegister.module.css';

function LoginRegister() {
  const { login, registered } = useContext(AuthContext);

  // Display / Not display error based on validation requirements
  const [err, setError] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // Handle Login process after submit
  const handleLoginSubmit = async (formData) => {
    try {
      await login(formData);
    } catch (err) {
      setError(err.response.data);
    }
  };

  // Handle Register process after submit
  const handleRegisterSubmit = async (formData) => {
    setError(null);

    // Validate the form inputs
    const isValid = validateForm(formData, setError);
    if (!isValid) return;

    try {
      await registered(formData);
      // Handle registration completion logic if needed
    } catch (err) {
      setError(err.response.data);
    }
  };

  // Fields for the login form
  const loginFields = [
    {
      name: 'username',
      className: styles.dataInputs,
      type: 'text',
      placeholder: 'User Name',
      required: true,
    },
    {
      name: 'password',
      className: styles.dataInputs,
      type: 'password',
      placeholder: 'Password',
      required: true,
    },
  ];

  // Fields for the registration form
  const registerFields = [
    {
      name: 'username',
      className: styles.dataInputs,
      type: 'text',
      placeholder: 'User Name',
      required: true,
    },
    {
      name: 'email',
      className: styles.dataInputs,
      type: 'email',
      placeholder: 'Email',
      required: true,
    },
    {
      name: 'password',
      className: styles.dataInputs,
      type: 'password',
      placeholder: 'Password',
      required: true,
    },
    {
      name: 'confirm_password',
      className: styles.dataInputs,
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    },
    {
      name: 'city',
      className: styles.dataInputs,
      type: 'text',
      placeholder: 'City',
      required: true,
    },
    {
      name: 'address',
      className: styles.dataInputs,
      type: 'text',
      placeholder: 'Address',
      required: true,
    },
    {
      name: 'phone',
      className: styles.dataInputs,
      type: 'tel',
      placeholder: 'Phone Number',
      required: true,
    },
  ];

  // Conditional rendering the correct fields login/register
  const handleRegisterLinkClick = (e) => {
    e.preventDefault();
    setShowRegisterForm((prev) => !prev);
  };

  // Change header Login / Register
  const headerContent = (
    <>
      <div className={styles.head}>
        <h1>Welcome to Eco Collectors!</h1>
        {showRegisterForm ? (
          <h2>Please Register to continue</h2>
        ) : (
          <h2>Please log in to continue</h2>
        )}
      </div>
    </>
  );

  // Change footer Login / Register
  const footerMessage = showRegisterForm ? (
    <>
      Already have an account?{' '}
      <a
        href="/"
        onClick={handleRegisterLinkClick}
        className={styles.clickable}
      >
        Click to Sign In
      </a>
    </>
  ) : (
    <>
      Don't have an account?{' '}
      <a
        href="/"
        onClick={handleRegisterLinkClick}
        className={styles.clickable}
      >
        Click to Register
      </a>
    </>
  );

  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <Form
          header={headerContent}
          fields={showRegisterForm ? registerFields : loginFields}
          handleSubmit={
            showRegisterForm ? handleRegisterSubmit : handleLoginSubmit
          }
          footer={footerMessage}
          isRegister={showRegisterForm}
          error={err} // Pass the error state as the error prop
        />
      </div>
    </main>
  );
}

export default LoginRegister;
