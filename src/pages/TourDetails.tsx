import  { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours';
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/booking/Booking.tsx";
import Newsletter from "../shared/Newsletter.tsx";

const TourDetails = () => {
    const { id } = useParams();
    const tour = tourData.find(tour => tour.id === id);

    if (!tour) {
        return <p>Tour not found</p>;
    }

    const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    const reviewMagRef = useRef();
    const [userReviews, setUserReviews] = useState([
        {
            name: "Dill",
            date: "2025-01-01",
            rating: 5,
            review: "Amazing Travel The Year",
        },
        {
            name: "Anna",
            date: "2025-01-02",
            rating: 4,
            review: "Great experience, but the weather could have been better.",
        },
    ]);
    const [selectedRating, setSelectedRating] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        const reviewText = reviewMagRef.current.value;

        if (reviewText && selectedRating > 0) {
            const newReview = {
                name: "Guest",
                date: new Date().toISOString(),
                rating: selectedRating,
                review: reviewText,
            };
            setUserReviews([...userReviews, newReview]);
            reviewMagRef.current.value = '';
            setSelectedRating(0);
        } else {
            alert('Please enter a review and select a rating.');
        }
    };

    return (
        <Container className="ml-20 mt-10 mb-10 ml-5 mr-5">
            <Row>
                <Col lg="12" className="ml-20px mt-10px">
                    <div className="tour-details-container d-flex">
                        <div className="tour__content">
                            <img src={photo} alt={title}/>
                            <div className="tour-info">
                                <h2>{title}</h2>
                                <div className="d-flex align-items-center gap-5">
                                <span className="d-flex align-items-center">
                                    <span className="text-black">
                                        ⭐ {avgRating.toFixed(1)} <span>({reviews.length} reviews)</span>
                                    </span>
                                </span>
                                    <span className="d-flex align-items-center gap-2">
                                    <FaMapMarkerAlt color="red"/>
                                    <span>{address}</span>
                                </span>
                                </div>
                                <div className="tour__extra-details d-flex align-items-center gap-5 mt-3">
                                <span className="d-flex align-items-center gap-2">
                                    <FaMapMarkerAlt color="blue"/>
                                    {city}
                                </span>
                                    <span className="d-flex align-items-center gap-2">
                                    <FaDollarSign color="green"/>
                                    ${price}
                                </span>
                                    <span className="d-flex align-items-center gap-2">
                                    <FaMapMarkerAlt color="blue"/>
                                        {distance} k/m
                                </span>
                                    <span className="d-flex align-items-center gap-2">
                                    <FaUsers color="orange"/>
                                        {maxGroupSize} people
                                </span>
                                </div>
                                <div className="tour-desc">Description</div>
                                <p>{desc}</p>
                            </div>
                        </div>
                        <div className="tour__reviews mt-4 ml-10">
                            <h5>Reviews ({userReviews.length} reviews)</h5>
                            <Form onSubmit={submitHandler}
                                  className="d-flex align-items-center gap-5 mb-4 rating__group">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => setSelectedRating(star)}
                                        className={`text-black ${selectedRating === star ? 'selected' : ''}`}
                                        style={{cursor: 'pointer'}}
                                    >
                                    {star}⭐
                                </span>
                                ))}
                                <div className="review__input d-flex align-items-center gap-5">
                                    <input type="text" ref={reviewMagRef} placeholder="Share your thoughts"/>
                                    <button type="submit" className="btn primary__btn text-white">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                            <ListGroup className="user__reviews mt-0">
                                {userReviews.map((review, index) => (
                                    <div key={index} className="review__item">
                                        <img src={avatar} alt="Reviewer Avatar"/>
                                        <div className="w-100">
                                            <div className="d-flex align-items-center justify-content-between gap-5">
                                                <h5>{review.name}</h5>
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
                                            <h4>{review.review}</h4>
                                        </div>
                                    </div>
                                ))}
                            </ListGroup>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-5 mt-0 ">
                            <Booking tour={tour}/>
                        </div>
                    </div>
                </Col>
            </Row>
         <Newsletter/>
        </Container>

    );
};

export default TourDetails;
