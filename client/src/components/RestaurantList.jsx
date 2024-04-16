import React from 'react';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import { useLoaderData } from 'react-router-dom';

function RestaurantList({restaurants, setData, search, setSearch}) {
  let allRestaurants = useLoaderData();

  return (
    <div>
      <div className='searchBar'>
        <input 
          type='text'
          className='search'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {allRestaurants.map((rest) => (
        <RestaurantCard restaurant={rest} />
      ))}
    </div>
  );
}

export default RestaurantList;
