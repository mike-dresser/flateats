import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function RestaurantMappedLocation({ lat, lng }) {
  const position = { lat: parseFloat(lat), lng: parseFloat(lng) };

  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div style={{ height: '300px', width: '100%' }}>
        <Map defaultCenter={position} defaultZoom={15}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMappedLocation;
