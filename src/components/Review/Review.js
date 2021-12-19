import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://evening-island-64478.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container text-center my-5">
            <h2 className="pb-2">Our <span className="pink-text">Customers</span> Reviews</h2>
            <p className="pb-2">Read Customers reviews and find out what they are saying about us.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reviews.map(review => <div className="col" key={review?._id}>
                    <div className="card h-200 pt-3">
                        <div className="text-center">
                            <i className="far fa-user-circle fs-1"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{review?.username}</h5>
                            <h6 className="card-title">{review?.email}</h6>
                            <p className="card-text">“{review?.message}”</p>

                            <Rating
                                readonly
                                placeholderRating={review?.rating}
                                emptySymbol={<i className="far fa-star text-warning fs-5"></i>}
                                placeholderSymbol={<i className="fas fa-star text-warning fs-5"></i>}
                                fullSymbol={<i className="fas fa-star text-warning fs-5"></i>}
                            />

                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Review;