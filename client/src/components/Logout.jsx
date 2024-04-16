import React from 'react';

function Logout({ setLoggedInUser }) {
  function handleLogout() {
    fetch(`/api/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(() => setLoggedInUser(null));
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
