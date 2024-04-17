import React from 'react';
import './Header.css';
import Login from '../Login';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

function Header({ loggedInUser, setLoggedInUser }) {
  return (
    <div id="header">
      <div id="headerLeft">
        <h1>
          <Link to="/">
            <span className="flatironLogo">//</span>Flateats
          </Link>
        </h1>
        <p className="tagline">
          The <em>only</em> source for reliable lunch recommendations.
        </p>
      </div>
      <div id="headerRight">
        {loggedInUser ? (
          <>
            <Logout setLoggedInUser={setLoggedInUser} />
            <p>
              Welcome, <span class="username">{loggedInUser.username}</span>!
            </p>
          </>
        ) : (
          <Login setLoggedInUser={setLoggedInUser} />
        )}
      </div>
    </div>
  );
}

export default Header;
