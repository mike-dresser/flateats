import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

function RestaurantMap({ restaurants }) {
  const flatironCoords = { lat: 40.7053707, lng: -74.0142418 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div id="mapContainer">
        <Map defaultCenter={flatironCoords} defaultZoom={15.5} mapId="9dff5b157a44a0e1">
          <AdvancedMarker position={flatironCoords} title="Flatiron School">
            <Pin
              background="lightblue"
              borderColor="black"
              glyph="//"
              scale={1.4}
            />
          </AdvancedMarker>
          {restaurants.map((restaurant, index) => (
            <AdvancedMarker
              key={index}
              position={{ lat: parseFloat(restaurant.pos_lat), lng: parseFloat(restaurant.pos_lon) }}
              title={restaurant.name}
            >
              <Pin
              background="red"
              borderColor="black"
              scale={0.8}
            />
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMap;
