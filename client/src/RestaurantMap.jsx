import React from 'react';
// Imports for Google Maps API
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function RestaurantMap() {
  const position = { lat: 40.7052878, lng: -74.0164789 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div id="mapContainer">
        <Map center={position} zoom={15}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMap;
