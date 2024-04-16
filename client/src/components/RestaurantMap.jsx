import React from 'react';
// Imports for Google Maps API
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

function RestaurantMap({ restaurantCoords }) {
  const flatironCoords = { lat: 40.7053707, lng: -74.0142418 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div id="mapContainer">
        <Map defaultCenter={ restaurantCoords || flatironCoords } defaultZoom={16} mapId="9dff5b157a44a0e1">
          <AdvancedMarker position={flatironCoords} title="Flatiron School">
            <Pin
              background="lightblue"
              borderColor="black"
              glyph="//"
              scale={1.4}
            />
          </AdvancedMarker>
          <AdvancedMarker position={restaurantCoords}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMap;