import React from 'react';
import './Header.css';
import Login from '../Login';
import { Link, useLocation } from 'react-router-dom';
import Logout from '../Logout';

function Header({ loggedInUser, setLoggedInUser }) {
  const current_path = useLocation();
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
              Welcome,{' '}
              <Link to={`/user/${loggedInUser.username}`} className="username">
                {loggedInUser.username}
              </Link>
              !
            </p>
          </>
        ) : (
          current_path.pathname != '/signup' && (
            <Login setLoggedInUser={setLoggedInUser} />
          )
        )}
      </div>
    </div>
  );
}

export default Header;
