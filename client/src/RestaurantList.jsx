import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useLoaderData } from 'react-router-dom';

function RestaurantList() {
  let allRestaurants = useLoaderData();

  return (
    <div>
      {allRestaurants.map((rest) => (
        <RestaurantCard restaurant={rest} />
      ))}
    </div>
  );
}

export default RestaurantList;
