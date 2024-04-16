import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    let loginSubmission = { username: username, password: password };
    console.log(loginSubmission);

    fetch(`http://127.0.0.1:5555/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginSubmission),
    })
      .then((response) => response.json())
      .then((r) => console.log(r));
  }
  return (
    <div className="login-container">
    <form onSubmit={(e) => handleLogin(e)} className="login-form">
      <label htmlFor="username">Username</label>
      <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
    </div>
  );
}

export default Login;
