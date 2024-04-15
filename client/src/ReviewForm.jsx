import React from 'react'

function ReviewForm({ restaurantId }) {
    // new review post states
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewBody, setReviewBody] = useState("")
    const [reviewRating, setReviewRating] = useState("")

    const [isShown, setIsShown] = useState(false)

    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const newReview = {title, body, rating}

            fetch(`http://127.0.0.1:5555/reviews/restaurant/${restaurantId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/JSON"
                },
                body: JSON.stringify(newReview)
            })
            .then((r) => r.json())
            .thend((d) => {
                //setData
            })
    }

    const handleShow = () => {
        setIsShown(!isShown)
    }

    return (
        <div className='form-container'>
            <button className='show' onClick={handleShow}>Write a review</button>
            {isShown && 
            <form className='form' onSubmit={handleReviewSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Review Title' 
                    className='title-text'
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                />
                <input 
                    type='text'
                    name='body'
                    placeholder='Write your review here'
                    className='body-text'
                    value={reviewBody}
                    onChange={(e) => setReviewBody(e.target.value)}
                />
                <input 
                    type='text'
                    name='rating'
                    placeholder='rate 1-5'
                    className='review-rating'
                    value={reviewRating}
                    onChange={(e) => setReviewRating(e.target.value)}
                />
                <button type='submit' className='submit-button'>Post Review</button>
            </form>}
        </div>
    )
}

export default ReviewForm