import React from 'react';
import './Register.module.css';

function RegisterForm() {
  return (
    <main>
      <form className="form-container">
        <h2>Register Form</h2>
        <div className="name">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <div className="terms">
          <input type="checkbox" required /> I accept{' '}
          <a href="#">Terms of Use</a>
        </div>
        <button>Register Now</button>
      </form>
    </main>
  );
}

export default RegisterForm;
