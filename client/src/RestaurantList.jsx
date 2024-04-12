import React from 'react';
import RestaurantCard from './RestaurantCard';

// Test restaurant data
const data = [
  {
    distance_time: 3,
    price: 2,
    name: 'Chipotle',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPSvvqVfLwDsE_u4euCapUVyahmT13OlLgpev7M=w408-h306-k-no',
    id: 1,
    pos_lon: -74.0144023,
    pos_lat: 40.7047946,
    cuisine: 'mexican, fast-food',
  },
  {
    distance_time: 1,
    price: 2,
    name: 'Subway',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPLzmsudzLMGAZRMR2ep_r8ONme5G1lPAfSWUaV=w408-h725-k-no',
    id: 2,
    pos_lon: -74.0144287,
    pos_lat: 40.7051201,
    cuisine: 'american, sandwiches',
  },
  {
    distance_time: 2,
    price: 2,
    name: 'Liberty Bagels',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOSVsAl4Mzhq6LzUphugVf-LIacRwl92kQCfb4=w408-h544-k-no',
    id: 3,
    pos_lon: -74.0131574,
    pos_lat: 40.7059395,
    cuisine: 'american, sandwich, breakfast',
  },
  {
    distance_time: 3,
    price: 1,
    name: 'Continental Express Halal Food',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipObjHJDVHJ-63ezgBgTKbwDhye2ANsb2M0MY9Zh=w408-h306-k-no',
    id: 4,
    pos_lon: -74.0125789,
    pos_lat: 40.7049238,
    cuisine: 'middle-eastern, halal',
  },
  {
    distance_time: 3,
    price: 2,
    name: 'Burger King',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNgy-R7EDtPBMwcbCtwiKWkUclXL1WDrOkC8-ma=w408-h544-k-no',
    id: 5,
    pos_lon: -74.0125784,
    pos_lat: 40.7049236,
    cuisine: 'american, burger',
  },
];

function populateList(list_data) {
  const result = [];
  for (let restaurant of list_data) {
    result.push(<RestaurantCard restaurant={restaurant} key={restaurant.id} />);
  }
  return result;
}

function RestaurantList() {
  return <div>{[populateList(data)]}</div>;
}

export default RestaurantList;
