import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default UserProfile;