import React from 'react';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import { useLoaderData } from 'react-router-dom';

function RestaurantList({restaurants, search, setSearch}) {
  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  let allRestaurants = restaurants;

  return (
    <div>
      <div className='searchBar'>
        <input 
          type='text'
          className='search'
          placeholder='Search'
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {allRestaurants.map((rest) => (
        <RestaurantCard 
          key={rest.id}
          restaurant={rest}
          />
      ))}
    </div>
  );
}

export default RestaurantList;
