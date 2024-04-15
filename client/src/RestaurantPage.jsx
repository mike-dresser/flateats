import React, { useState, useEffect } from 'react';
import RestaurantReviews from './RestaurantReviews';
import { useLoaderData, useParams } from "react-router-dom"

function RestaurantPage({restaurantProp}) {
    let singleRestaurant = useLoaderData()
    if (restaurantProp) { singleRestaurant = restaurantProp }

    const [restaurantData, setRestaurantData] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchRestaurant = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://127.0.0.1:5555/restaurants/${id}`);
                const data = await response.json();
                setRestaurantData(data); 
            } catch (error) {
                console.error('Failed to fetch restaurant data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!restaurantData) { // Check restaurantData instead
        return <div>Restaurant not found.</div>;
    }

    return (
        <div>
            <h1>{restaurantData.name}</h1>
            <img src={restaurantData.image} alt={restaurantData.name} />
            <p>Cuisine: {restaurantData.cuisine}</p>
            <p>Price Level: {'$'.repeat(restaurantData.price)}</p>
            <p>Distance Time: {restaurantData.distance_time} minutes</p>
            <RestaurantReviews restaurantId={id} />
        </div>
    );
}

export default RestaurantPage;