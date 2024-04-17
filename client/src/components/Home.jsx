import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantMap from './RestaurantMap';
import About from './About';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const { restaurants } = useOutletContext();
  const [search, setSearch] = useState('');
  const filteredPost = restaurants.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div id="main">
      <div className="list-map-container">
        <RestaurantList
          restaurants={filteredPost}
          search={search}
          setSearch={setSearch}
        />
        <RestaurantMap restaurants={filteredPost}/>
      </div>
      <About />
    </div>
  );
}

export default Home;
