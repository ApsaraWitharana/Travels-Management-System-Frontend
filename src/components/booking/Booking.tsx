import {useState} from "react";
import './booking.css'
import {FormGroup,ListGroup,ListGroupItem,Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

const Booking =({tour,avgRating})=>{

    const navigate = useNavigate();
    const [credentials,setCredentials]=useState({
        userId:'01',
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    });
    const {price,reviews}= tour;
    const serviceFree = 10
    const totalAmount = Number(price) * Number(credentials.guestSize)+Number(serviceFree)


    const handleChange = (event)=>{
        setCredentials(prevCredentials => ({...prevCredentials,[event.target.id]:event.target.value}));
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log(credentials);
        navigate('./thank-you')
    };
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
                <form className="booking__info-form" onSubmit={handleChange}>
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
            {/*================booking bottom =========*/}
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
                            <span>${serviceFree}</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <div className="d-flex justify-content-between align-items-center mt-5 text-black">
                            <h5>Total</h5>
                            <span>${totalAmount}</span>
                        </div>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>Book Now</Button>
            </div>

        </div>

    )
}
export default Booking;