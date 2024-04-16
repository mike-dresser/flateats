import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    fetch('/api/check_session', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => {
      setLoggedInUser(res.ok);
    });
  }, []);

  return (
    <>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Outlet context={[restaurants, loggedInUser]} />
    </>
  );
}

export default App;
