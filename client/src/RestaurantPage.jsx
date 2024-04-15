import React, { useState, useEffect } from 'react';
import Header from './Header';
import RestaurantReviews from './RestaurantReviews';
import RestaurantMap from './RestaurantMap';
import ReviewForm from './ReviewForm';
import { useLoaderData, useParams } from "react-router-dom" // load data specific to the current route, and extract to the URL parameter 

function RestaurantPage({restaurantProp}) {
    let singleRestaurant = useLoaderData()
    if (restaurantProp) { singleRestaurant = restaurantProp }

    const [restaurantData, setRestaurantData] = useState(null); // stores the data and tracks the state of restaurant's data we fetch from API
    const [isLoading, setIsLoading] = useState(true); // placed to keep track of whether the data is being fetched
    const { id } = useParams(); // we get the id from the URL parameters using this hook, and we capture the dynamic part of the URL that identifies a specific restaurant


    useEffect(() => { // hook runs when the id value changes
        const fetchRestaurant = async () => { // define async function and call within the effect, fetch the data based on id, parse the JSON response, update the restaurantData state.
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

        fetchRestaurant();
    }, []);
    // NEED TO RESET PAGE UPON FORM SUBMISSION TO SHOW THE NEW REVIEW

    // conditional rendering statements: before rendering the full component, check if data is still loading, and if no data is found, display a "restaurant not found" message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!restaurantData) { // Check restaurantData instead
        return <div>Restaurant not found.</div>;
    }

    return (
        <div>
            <Header />
            <h1>{restaurantData.name}</h1>
            <img src={restaurantData.image} alt={restaurantData.name} />
            <p>Cuisine: {restaurantData.cuisine}</p>
            <p>Price Level: {'$'.repeat(restaurantData.price)}</p>
            <p>Distance Time: {restaurantData.distance_time} minutes</p>
            <RestaurantMap restaurantCoords={{lat: restaurantData.pos_lat, lng: restaurantData.pos_lon}}  />
            <RestaurantReviews restaurantId={id} />
            <ReviewForm restaurantId={id} />
        </div>
    );
}

export default RestaurantPage;