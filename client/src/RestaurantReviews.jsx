import React, { useState, useEffect } from 'react';

function RestaurantReviews({ restaurantId }) {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://127.0.0.1:5555/reviews/restaurant/${restaurantId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // DATA VALIDATION PART!!!! V IMPORTANT
                let reviewsData = await response.json();

                // map over reviewsData to create a new array detailedReviews, that will take the 'review' object from the 'reviewData' array and then spread its properties into a new object. Then, add the username property into the new object as well as the restaurantName property. These were previously nested in the object, but turned into properties in the new array.
                const detailedReviews = reviewsData.map(review => ({
                    ...review,
                    username: review.user.username,
                    restaurantName: review.restaurant.name
                }));
                setReviews(detailedReviews);
            } catch (err) {
                console.error("Failed to fetch reviews:", err);
                setError('Failed to load data: ' + err.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        if (restaurantId) { // if truthy, call the fetchReviews function
            fetchReviews();
        }
    }, [restaurantId]);

    if (isLoading) return <p>Loading reviews...</p>;
    if (error) return <p>{error}</p>;
    if (reviews.length === 0) return <p>No reviews yet.</p>;

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review.id} >
                    <h4>{review.title}</h4>
                    <p>{review.body}</p>
                    <p>Rating: {review.rating}</p>
                    <p>User: {review.username}</p>
                </div>
            ))}
        </div>
    );
}

export default RestaurantReviews;
