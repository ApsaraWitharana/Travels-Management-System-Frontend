import { useState, useContext } from "react";
import './booking.css';
import { FormGroup, ListGroup, ListGroupItem, Button, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.tsx";
import { BASE_URL } from "../../util/config.ts";

const Booking = ({ tour, avgRating }) => {
    const { user } = useContext(AuthContext);
    const { price, title } = tour;
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");

    const [booking, setBooking] = useState({
        userId: user ? user._id : '',
        userEmail: user ? user.email : '',
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const reviews = tour?.reviews || [];
    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    const handleChange = (event) => {
        setBooking(prevCredentials => ({
            ...prevCredentials,
            [event.target.id]: event.target.value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user) {
            alert("Please sign in");
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(booking)
            });
            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setSuccessMessage("Booking successful! Redirecting...");
            setTimeout(() => {
                navigate('/thank-you');
            }, 2000);

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="booking">
            <div className="booking__top">
                <h3>${price} <span>/per person</span></h3>
                <span className="booking__bottom">
                    <span className="text-black">
                        ⭐ {avgRating === 0 ? null : avgRating} ({reviews?.length || 0} reviews)
                    </span>
                </span>
            </div>

            <div className="booking__bottom">
                <h5>Information</h5>
                <form className="booking__info-form">
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="number"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-between align-items-center">
                        <input
                            type="date"
                            id="bookAt"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="Guest"
                            id="guestSize"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                </form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="booking__list-item border-0 px-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Price</h5>
                            <span>${price}<span>/1 person</span></span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <h5>Service charge</h5>
                            <span>${serviceFee}</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <div className="d-flex justify-content-between align-items-center mt-5 text-black">
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </div>
                    </ListGroupItem>
                </ListGroup>

                {successMessage && (
                    <Alert color="success" className="mt-3">{successMessage}</Alert>
                )}

                <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>Book Now</Button>
            </div>
        </div>
    );
};

export default Booking;
