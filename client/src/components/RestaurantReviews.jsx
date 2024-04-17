import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ReviewForm from './ReviewForm';

function RestaurantReviews({ restaurantId }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://127.0.0.1:5555/reviews/restaurant/${restaurantId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let reviewsData = await response.json();
        setReviews(reviewsData);
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
        setError('Failed to load data: ' + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (restaurantId) {
      // if truthy, call the fetchReviews function
      fetchReviews();
    }
  }, [restaurantId]);

  if (isLoading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div id='restaurantReviews'>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className='reviewEntry'>
          <h3>{review.title}</h3>
          <div className="reviewerName">{review.user.username}</div>
            {/* <Link to={`/user/${review.user.username}`} className="link-style">
                {review.user.username}
            </Link> */}
          <div className="reviewText">Rating: {review.rating}</div>
          <div className="reviewText">{review.body}</div>
        </div>
      ))}
      {/* <ReviewForm restaurantId={id} /> */}
    </div>
  );
}

export default RestaurantReviews;
