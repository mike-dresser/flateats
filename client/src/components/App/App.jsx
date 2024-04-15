import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import RestaurantMap from '../RestaurantMap';
import RestaurantList from '../RestaurantList';
import Login from '../Login';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/restaurants")
  //   .then(r => r.json())
  //   .then((d) => setRestaurants(d))
  //   .catch((error) => console.error('Error fetching data:', error));
  // }, []);

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

  return (
    <>
      <Header />
      <div id="main">
        <RestaurantList />
        <RestaurantMap />
      </div>
    </>
  );
}

export default App;
