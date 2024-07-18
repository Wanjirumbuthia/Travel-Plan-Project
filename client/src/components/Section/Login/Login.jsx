import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isSignUp ? 'http://127.0.0.1:5555/signup' : 'http://127.0.0.1:5555/login';
    const data = isSignUp ? {
      username: document.getElementById('name').value,
      email: document.getElementById('email-signup').value,
      password: document.getElementById('password-signup').value,
      confirmPassword: document.getElementById('confirm-password').value,
    } : {
      email: email,
      password: password,
    };
  
    if (!isSignUp) {
      // Validate email and password for login
      if (!email || !password) {
        alert('Please enter both email and password');
        return;
      }
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Invalid email address');
        return;
      }
      if (password.length < 4) {
        alert('Password must be at least 4 characters long');
        return;
      }
  
      // Make a request to the backend to validate the username and password
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.valid) {
            // Login is valid, proceed with login
            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Login successful!');
                // You can redirect the user to the dashboard or display a success message
              })
              .catch((error) => {
                console.error('Error:', error);
                // You can display an error message to the user
              });
          } else {
            alert('Invalid username or password');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          // You can display an error message to the user
        });
    } else {
      // Sign up logic remains the same
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Sign up successful!');
          // You can redirect the user to the login page or display a success message
        })
        .catch((error) => {
          console.error('Error:', error);
          // You can display an error message to the user
        });
    }
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
