import React from 'react';
// Imports for Google Maps API
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
import { useLoaderData } from 'react-router-dom';

function RestaurantMap() {
  let allRestaurants = useLoaderData();
  const flatiron_position = { lat: 40.7053707, lng: -74.0142418 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div id="mapContainer">
        <Map
          defaultCenter={flatiron_position}
          defaultZoom={16}
          mapId="9dff5b157a44a0e1"
        >
          <AdvancedMarker position={flatiron_position} title="Flatiron School">
            <Pin
              background="lightblue"
              borderColor="black"
              glyph="//"
              scale={1.4}
            />
          </AdvancedMarker>
          {allRestaurants.map((r) => (
            <AdvancedMarker
              position={{ lat: r.pos_lat, lng: r.pos_lon }}
              title={r.name}
            />
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}

export default RestaurantMap;
