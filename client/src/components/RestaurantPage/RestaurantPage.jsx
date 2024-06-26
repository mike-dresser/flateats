import React, { useState, useEffect } from 'react';
import './RestaurantPage.css';
import RestaurantReviews from '../RestaurantReviews';
import RestaurantMap from '../RestaurantMap';
import ReviewForm from '../ReviewForm';
import { useLoaderData, useParams, useOutletContext } from 'react-router-dom'; // load data specific to the current route, and extract to the URL parameter

function RestaurantPage({ restaurantProp }) {
  let singleRestaurant = useLoaderData();
  if (restaurantProp) {
    singleRestaurant = restaurantProp;
  }
  const { loggedInUser } = useOutletContext();
  const [restaurantData, setRestaurantData] = useState(null); // stores the data and tracks the state of restaurant's data we fetch from API
  const [isLoading, setIsLoading] = useState(true); // placed to keep track of whether the data is being fetched
  const { id } = useParams(); // we get the id from the URL parameters using this hook, and we capture the dynamic part of the URL that identifies a specific restaurant

  const fetchRestaurant = async () => {
    // define async function and call within the effect, fetch the data based on id, parse the JSON response, update the restaurantData state.
    setIsLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5555/restaurants/${id}`);
      const data = await response.json();
      setRestaurantData(data);
    } catch (error) {
      console.error('Failed to fetch restaurant data:', error); // minor error handling done here
    } finally {
      setIsLoading(false); // set isLoading to false once the fetch is complete
    }
  };
  useEffect(() => {
    // hook runs when the id value changes

    fetchRestaurant();
  }, []);

  // conditional rendering statements: before rendering the full component, check if data is still loading, and if no data is found, display a "restaurant not found" message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurantData) {
    // Check restaurantData instead
    return <div>Restaurant not found.</div>;
  }

  return (
    <div>
      <div id="top">
        <div id="restaurantMain">
          <div id="restaurantDetails">
            <img src={restaurantData.image} alt={restaurantData.name} />
            <h1>{restaurantData.name}</h1>
            <p>Cuisine: {restaurantData.cuisine}</p>
            <p>Price Level: {'$'.repeat(restaurantData.price)}</p>
            <p>Distance Time: {restaurantData.distance_time} minutes</p>
          </div>
          <div id="restaurantMapContainer">
            <RestaurantMap
              restaurants={[restaurantData]}
            />
          </div>
        </div>
        <div id="restaurantForm">
          <ReviewForm
            restaurantId={id}
            fetchRestaurant={fetchRestaurant}
            loggedInUser={loggedInUser}
          />
        </div>
        <div id="restaurantReviews">
          <RestaurantReviews restaurantId={id} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
