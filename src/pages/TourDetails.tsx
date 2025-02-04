import { useRef, useState, useContext, useEffect } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import avatar from '../assets/images/avatar.jpg';
import Booking from "../components/booking/Booking.tsx";
import Newsletter from "../shared/Newsletter.tsx";
import useFetch from "../hooks/useFetch.ts";
import { BASE_URL } from "../util/config.ts";
import { AuthContext } from "../context/AuthContext.tsx";

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef<HTMLInputElement | null>(null);
    const [selectedRating, setSelectedRating] = useState(0);
    const { user } = useContext(AuthContext);
    console.log("Tour ID:", id);

    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    if (!tour) {
        return <p>Tour not found</p>;
    }

    const calculateAvgRating = (reviews) => {
        if (!reviews || reviews.length === 0) return { totalRating: 0, avgRating: 0 };
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        const avgRating = totalRating / reviews.length;
        return { totalRating, avgRating };
    };

    const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);
    const options = { day: "numeric", month: "numeric", year: "numeric" };

    const submitHandler = async (event) => {
        event.preventDefault();

        if(!user){
            alert("Please enter your email");
        }

        const reviewText = reviewMsgRef.current?.value.trim();


        if (!reviewText || selectedRating === 0) {
            alert("Please provide both a rating and a review.");
            return;
        }


        const reviewObj = {
            username: user?.username,    // Ensure this value exists
            reviewText: reviewText,
            userId: user?.id,
            rating: selectedRating,
        };

        console.log("Submitting Review:", reviewObj);
        console.log("Review API Endpoint:", `${BASE_URL}/review/${id}`);

        try {
            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",  // Ensure the session cookie is sent with the request
                body: JSON.stringify(reviewObj),  // Send the correct review object
            });

            const result = await res.json();
            console.log("API Response Status:", res.status);
            console.log("API Response Body:", result);

            if (!res.ok) {
                alert(result.message || "Failed to submit review.");
            } else {
                alert("Review submitted successfully!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("An error occurred while submitting the review.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tour]);

    return (
        <Container className="ml-20 mt-10 mb-10 ml-5 mr-5">
            {loading && <h4 className='text-center pt-5'>Loading......</h4>}
            {error && <h4 className='text-center pt-5'>{error}</h4>}

            {!loading && !error && (
                <Row>
                    <Col lg="12" className="ml-20px mt-10px">
                        <div className="tour-details-container d-flex">
                            <div className="tour__content">
                                <img src={photo} alt={title} />
                                <div className="tour-info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="d-flex align-items-center">
                                            <span className="text-black">
                                                ⭐ {avgRating.toFixed(1)}
                                                {totalRating === 0 ? " Not rated" : ` (${reviews?.length} reviews)`}
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
                                    <div className="tour-desc">Description</div>
                                    <p>{desc}</p>
                                </div>
                            </div>

                            <div className="tour__reviews mt-4 ml-10">
                                <h5>Reviews ({reviews?.length} reviews)</h5>
                                <Form onSubmit={submitHandler} className="d-flex align-items-center gap-5 mb-4 rating__group">
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
                                    <div className="review__input d-flex align-items-center gap-5">
                                        <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" />
                                        <button type="submit" className="btn primary__btn text-white">
                                            Submit
                                        </button>
                                    </div>
                                </Form>

                                <ListGroup className="user__reviews mt-0">
                                    {reviews?.map((review) => (
                                        <div key={review.id} className="review__item">
                                            <img src={avatar} alt="Reviewer Avatar" />
                                            <div className="w-100">
                                                <div className="d-flex align-items-center justify-content-between gap-5">
                                                    <h5>{review.username}</h5>
                                                    <p>
                                                        {new Date(review.createdAt).toLocaleDateString('en-US', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                        })}
                                                    </p>
                                                </div>
                                                <span className="d-flex align-items-center">
                    {review.rating} ⭐
                </span>
                                                <h4>{review.reviewText}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </ListGroup>

                            </div>

                            <Booking tour={tour} />
                        </div>
                    </Col>
                </Row>
            )}

            <Newsletter />
        </Container>
    );
};

export default TourDetails;
