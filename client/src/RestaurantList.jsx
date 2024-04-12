import React from 'react';
import RestaurantCard from './RestaurantCard';


function RestaurantList({restaurants}) {
  function populateList(restaurants) {

  const result = [];
  for (let restaurant of restaurants) {
    result.push(<RestaurantCard restaurant={restaurant} key={restaurant.id} />);
  }
  return result
}

  return (
    <div>
      {[populateList(restaurants)]}
    </div>)
}

export default RestaurantList;
