import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/users/${username}`);
        if (!response.ok) {
          throw Error('No Network Response');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(data.username)

  return (
    <div>
        <p>Testing Testing Testing</p>
    </div>,
    <div>
      Display user data here
      {userData && (
        <div>
          <h2>{userData.username}</h2>
          <p>{userData.reviews}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
