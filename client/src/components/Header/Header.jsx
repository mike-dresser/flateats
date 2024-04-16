import React from 'react';
import './Header.css';
import Login from '../Login';
import { Link } from 'react-router-dom';

function Header({ loggedInUser, setLoggedInUser }) {
  return (
    <div id="header">
      <div id="headerLeft">
        <h1>
          <Link to="/">
            <span>//</span>Flateats
          </Link>
        </h1>
        <p>
          The <em>only</em> source for reliable lunch recommendations.
        </p>
      </div>
      {loggedInUser ? (
        <>
          <p>Welcome, {loggedInUser.username}!</p>
        </>
      ) : (
        <Login setLoggedInUser={setLoggedInUser} />
      )}
    </div>
  );
}

export default Header;
