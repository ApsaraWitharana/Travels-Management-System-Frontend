import { useEffect, useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/booking/Booking.tsx";
import Newsletter from "../shared/Newsletter.tsx";
import useFetch from "../hooks/userFetch.ts";
import { BASE_URL } from "../util/config.ts";

const TourDetails = () => {
    const { _id } = useParams();
    const reviewMsgRef = useRef(null);
    const [selectedRating, setSelectedRating] = useState(0);
    const [userReviews, setUserReviews] = useState([]);

    // Fetch tour details
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${_id}`);

    // Fetch reviews dynamically
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch(`${BASE_URL}/review`);
                if (!res.ok) throw new Error("Failed to fetch reviews");
                const result = await res.json();
                setUserReviews(result.data || []);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchReviews();
    }, [_id]);

    const submitHandler = async (event) => {
        event.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        if (reviewText && selectedRating > 0) {
            const newReview = {
                userId: "guest_user", // Replace with actual user ID if available
                rating: selectedRating,
                reviewText: reviewText,
            };

            try {
                const res = await fetch(`${BASE_URL}/review/${_id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newReview),
                });

                if (!res.ok) throw new Error("Failed to submit review");

                const result = await res.json();
                setUserReviews([...userReviews, result.data]);
                reviewMsgRef.current.value = '';
                setSelectedRating(0);
            } catch (error) {
                console.error(error.message);
            }
        } else {
            alert('Please enter a review and select a rating.');
        }
    };

    if (loading) return <h4 className='text-center pt-5'>Loading......</h4>;
    if (error) return <h4 className='text-center pt-5'>{error}</h4>;
    if (!tour) return <p>Tour not found</p>;

    const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
    const avgRating = reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;

    return (
        <Container className="mt-10 mb-10">
            <Row>
                <Col lg="12">
                    <div className="tour-details-container d-flex flex-column flex-lg-row gap-5">
                        <div className="tour__content flex-grow-1">
                            <img src={photo} alt={title} className="tour__img" />
                            <div className="tour-info mt-4">
                                <h2>{title}</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="d-flex align-items-center">
                                        <span className="text-black">
                                            ⭐ {avgRating.toFixed(1)} <span>({reviews.length} reviews)</span>
                                        </span>
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <FaMapMarkerAlt color="red" />
                                        <span>{address}</span>
                                    </span>
                                </div>
                                <div className="tour__extra-details d-flex align-items-center gap-5 mt-3">
                                    <span className="d-flex align-items-center gap-2">
                                        <FaMapMarkerAlt color="blue" />
                                        {city}
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <FaDollarSign color="green" />
                                        ${price}
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <FaMapMarkerAlt color="blue" />
                                        {distance} km
                                    </span>
                                    <span className="d-flex align-items-center gap-2">
                                        <FaUsers color="orange" />
                                        {maxGroupSize} people
                                    </span>
                                </div>
                                <div className="tour-desc mt-4">
                                    <h4>Description</h4>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tour__reviews mt-4">
                            <h5>Reviews ({userReviews.length})</h5>
                            <Form onSubmit={submitHandler} className="d-flex align-items-center gap-3 mb-4 rating__group">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => setSelectedRating(star)}
                                        className={`text-black ${selectedRating === star ? 'selected' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {star}⭐
                                    </span>
                                ))}
                                <div className="review__input d-flex align-items-center gap-3">
                                    <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" className="form-control" />
                                    <button type="submit" className="btn primary__btn text-white">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                            <ListGroup className="user__reviews mt-4">
                                {userReviews.map((review, index) => (
                                    <div key={index} className="review__item mb-4 d-flex align-items-start gap-3">
                                        <img src={avatar} alt="Reviewer Avatar" className="avatar" />
                                        <div className="w-100">
                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                <h5>{review.userId}</h5>
                                                <p>
                                                    {new Date(review.date).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                            <span className="d-flex align-items-center">
                                                {review.rating} ⭐
                                            </span>
                                            <p>{review.reviewText}</p>
                                        </div>
                                    </div>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Booking tour={tour} />
                    </div>
                </Col>
            </Row>
            <Newsletter />
        </Container>
    );
};

export default TourDetails;