import React from 'react';
import './RestaurantCard.css';
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
    
      <Link to ={`/restaurants/${restaurant.id}`}>
        <h3>{restaurant.name} </h3>
        <h4>{'$'.repeat(restaurant.price)} </h4>
        <p>{restaurant.cuisine}</p>
      </Link>
      
    </div>
  );
}

export default RestaurantCard;
