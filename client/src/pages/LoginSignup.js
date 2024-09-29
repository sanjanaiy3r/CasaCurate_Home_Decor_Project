// src/pages/LoginSignup.js
import React, { useState } from 'react';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup">
      <div className="container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="social-auth">
          <button className="google-auth">Sign in with Google</button>
          <button className="facebook-auth">Sign in with Facebook</button>
        </div>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleForm} className="toggle-form">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
