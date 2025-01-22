import 'react';
import '../styles/tour-details.css';
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours';
import { FaMapMarkerAlt, FaDollarSign, FaUsers } from 'react-icons/fa';

const TourDetails = () => {
    const { id } = useParams();
    const tour = tourData.find(tour => tour.id === id);
    const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
    const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    return (
        <>
            <Container className='ml-20 mt-10 mb-10'>
                <Row>
                    <Col lg='8' className='ml-20px mt-10px'>
                        <div className="tour__content">
                            <img src={photo} alt={title} />
                            <div className="tour-info">
                                <h2>{title}</h2>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='d-flex align-items-center'>
                                        <span className='text-black'>
                                            ⭐ {avgRating.toFixed(1)} <span>({reviews.length} reviews)</span>
                                        </span>
                                    </span>
                                    <span className='d-flex align-items-center gap-2'>
                                        <FaMapMarkerAlt color="red" />
                                        <span>{address}</span>
                                    </span>
                                </div>
                                <div className='tour__extra-details d-flex align-items-center gap-5 mt-3'>
                                    <span className='d-flex align-items-center gap-2'>
                                        <FaMapMarkerAlt color="blue" />
                                        {city}
                                    </span>
                                    <span className='d-flex align-items-center gap-2'>
                                        <FaDollarSign color="green" />
                                        ${price}
                                    </span>
                                    <span className='d-flex align-items-center gap-2'>
                                        <FaUsers color="orange" />
                                        {maxGroupSize} people
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TourDetails;
