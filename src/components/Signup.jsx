import React from 'react';
import './signup.css';

export default function Signup() {
  return (
    <div className="signup-form-container">
      <h3>Sign In</h3>
      <form className="signup-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>New here? <a href="#">Sign up</a></p>
    </div>
  );
}
