import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import RestaurantMap from './RestaurantMap';
import RestaurantList from './RestaurantList';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5555/restaurants")
  //   .then(r => r.json())
  //   .then((d) => setRestaurants(d))
  //   .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <Header />
      <div id="main">
        {/* <RestaurantList restaurants={restaurants}/> */}
        <RestaurantList />
        <RestaurantMap />
      </div>
    </>
  );
}

export default App;
