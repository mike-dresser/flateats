import React, { useEffect, useState } from 'react';
import './Signup.css';
import { useOutletContext, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const { setLoggedInUser } = useOutletContext();
  const navigate = useNavigate();

  async function submitUser(e) {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        username: username,
        password: password,
      };
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newUser),
      });
      const response_data = await response.json();
      if (!response.ok) {
        setError(response_data['error']);
      } else {
        setLoggedInUser(response_data);
        navigate('/');
      }
    }
  }
  function validateForm() {
    if (password != passwordConfirm) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  }
  return (
    <div className="form-container expanded">
      <h2>Join the Flateats family!</h2>
      <form className="form" onSubmit={submitUser}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="title-text"
          name="username"
          placeholder="Choose a Username"
        ></input>

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="title-text"
          placeholder="Password"
        ></input>

        <input
          type="password"
          className="title-text"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          name="passwordConfirm"
          placeholder="Confirm Password"
        ></input>

        <input type="submit" className="submit-button"></input>
      </form>
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
}

export default Signup;
