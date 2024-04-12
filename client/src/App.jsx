import { useState } from 'react';
import './App.css';
import Header from './Header';
import RestaurantMap from './RestaurantMap';
import RestaurantList from './RestaurantList';

function App() {
  return (
    <>
      <Header />
      <div id="main">
        <RestaurantList />
        <RestaurantMap />
      </div>
    </>
  );
}

export default App;
