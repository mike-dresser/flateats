import React from 'react';
import './Header.css';
import Login from '../Login';
import { Link } from 'react-router-dom';

function Header({ loggedIn, setLoggedIn }) {

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
      {loggedIn ? <p>Welcome!</p> : <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default Header;
