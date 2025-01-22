import 'react';
import './booking.css'
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from "reactstrap";

const Booking =({tour,avgRating})=>{

    const {price,reviews}= tour;
    const handleChange = (event)=>{

    }
    return (
        <div className="booking">
            <div className="booking__top">
                <h3>${price} <span>/per person</span></h3>
                <span className="booking__bottom">
            <span className="text-black">
                ⭐ {avgRating === 0 ? null : avgRating}({reviews.length} reviews)
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
                            id="bookingAt"
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
        </div>

    )
}
export default Booking;