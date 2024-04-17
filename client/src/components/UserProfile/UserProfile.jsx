import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';

function UserProfile() {
  const { loggedInUser } = useOutletContext();

  const [userDetails, setUserDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/user/${loggedInUser.username}`);
        if (!response.ok) {
          throw new Error('No Network Response');
        }
        const data = await response.json();
        setUserDetails(data);
        setReviews(data.reviews);
        setLoading(false);
      } catch (error) {
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchUserData();
  }, [loggedInUser]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formattedDate;
  }
  return (
    <div id='restaurantReviews'>
        {userDetails && (
            <div>
                <h2>User profile: {userDetails.username}</h2>
                {reviews.map(review => (
                    <div key={review.id} className='reviewEntry'>
                        <h3>
                        <Link to={`/restaurants/${review.restaurant.id}`} className="link-style">
                            {review.restaurant.name}
                        </Link>
                        </h3>
                        <div className='reviewText'>Restaurant Rating: {review.rating}</div>
                        <div className='reviewText'>{review.title}</div>
                        <div className='reviewText'>Review: {review.body}</div>
                        <div className='userReviewCreated'>Submitted on: {formatDate(review.created_at)}</div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}

export default UserProfile;
