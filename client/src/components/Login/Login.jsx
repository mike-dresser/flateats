import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({ setLoggedInUser }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isShown, setIsShown] = useState(false);

  const handleShowLogin = () => {
    setIsShown(!isShown);
  };

  function handleLogin(e) {
    e.preventDefault();
    let loginSubmission = { username: username, password: password };

    fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(loginSubmission),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        if (user['id']) setLoggedInUser(user);
      });
  }
  return (
    <div className={`login-container ${isShown ? 'login-expanded' : ''}`}>
      {!isShown && (
        <button className="show" onClick={handleShowLogin}>
          Login or Sign Up
        </button>
      )}
      {isShown && (
        <form onSubmit={(e) => handleLogin(e)} className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="submit"></input>
          <p>
            Not a user?{' '}
            <span>
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
