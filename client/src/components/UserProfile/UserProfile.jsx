import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function UserProfile() {

    const {loggedInUser} = useOutletContext()

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/users/${loggedInUser.id}`);
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

  return (

    <div>
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
