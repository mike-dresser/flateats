import React from 'react';

function Login() {
  return (
    <form>
      <label for="username">Username</label>
      <input type="text"></input>
      <label for="password">Password</label>
      <input type="password"></input>
      <input type="submit"></input>
    </form>
  );
}

export default Login;
