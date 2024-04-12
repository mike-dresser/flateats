import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useLoaderData } from "react-router-dom"


function RestaurantList({restaurants}) {
  let allRestaurants = useLoaderData()
  if (restaurants) { allRestaurants = restaurants }
  function populateList(restaurants) {

  const result = [];
  for (let restaurant of restaurants) {
    result.push(<RestaurantCard restaurant={restaurant} key={restaurant.id} />);
  }
  return result
}

  return (
    <div>
      {populateList(allRestaurants)}
    </div>)
}

export default RestaurantList;
