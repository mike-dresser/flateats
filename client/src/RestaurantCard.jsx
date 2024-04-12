import React from 'react';
import './RestaurantCard.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <h3>{restaurant.name} </h3>
      <h4>{'$'.repeat(restaurant.price)} </h4>
      <p>{restaurant.cuisine}</p>
    </div>
  );
}

export default RestaurantCard;
