import React, { useState } from 'react';

function Login({ setLoggedIn }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

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
    }).then((response) => {
      if (response.ok) setLoggedIn(true);
    });
  }
  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <label htmlFor="username">Username</label>
      <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
}

export default Login;
