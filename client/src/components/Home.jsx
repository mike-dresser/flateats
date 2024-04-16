import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantMap from './RestaurantMap';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const { restaurants } = useOutletContext();
  const [search, setSearch] = useState('');
  const filteredPost = restaurants.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div id="main">
      <RestaurantList
        restaurants={filteredPost}
        search={search}
        setSearch={setSearch}
      />
      <RestaurantMap />
    </div>
  );
}

export default Home;
