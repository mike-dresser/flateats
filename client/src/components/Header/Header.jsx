import React from 'react';
import './Header.css';
import Login from '../Login';

function Header() {
  return (
    <div id="header">
      <div id="headerLeft">
        <h1>
          <span>//</span>Flateats
        </h1>
        <p>
          The <em>only</em> source for reliable lunch recommendations.
        </p>
      </div>
      <Login />
    </div>
  );
}

export default Header;
