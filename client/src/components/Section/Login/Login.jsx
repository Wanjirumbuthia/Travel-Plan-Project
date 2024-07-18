import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`cont ${isSignUp ? 's-signup' : ''}`}>
      <div className="form sign-in">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit">Login</button>
        </form>
        <p className="forgot-pass">Forgot Password?</p>

        <div className="social-media">
          <ul>
            <li>
              <img
                src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/facebook.png"
                alt="Facebook"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/twitter.png"
                alt="Twitter"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/linkedin.png"
                alt="LinkedIn"
              />
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/abo-elnoUr/public-assets/master/instagram.png"
                alt="Instagram"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-cont">
        <div className="img">
          <div className="img-text m-up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img-text m-in">
            <h2>One of us?</h2>
            <p>If you already have an account, just sign in. We've missed you!</p>
          </div>
          <div className="img-btn" onClick={handleToggle}>
            <span className="m-up">Sign Up</span>
            <span className="m-in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>UserName</span>
              <input
                type="text"
                id="name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                id="email-signup"
                required
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                id="password-signup"
                required
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                id="confirm-password"
                required
              />
            </label>
            <button type="submit" className="submit">Sign Up Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
