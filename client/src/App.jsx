import { useState } from 'react';
import './App.css';
import Header from './Header';
import RestaurantMap from './RestaurantMap';

function App() {
  return (
    <>
      <Header />
      <p>Here is some other info.</p>
      <RestaurantMap />
    </>
  );
}

export default App;
