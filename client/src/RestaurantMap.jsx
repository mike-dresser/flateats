import React from 'react';
// Imports for Google Maps API
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function RestaurantMap() {
  const position = { lat: 40.7053707, lng: -74.0142418 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div id="mapContainer">
        <Map defaultCenter={position} defaultZoom={16}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMap;
