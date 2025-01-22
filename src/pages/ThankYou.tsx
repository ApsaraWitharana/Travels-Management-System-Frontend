import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Newsletter from "../shared/Newsletter";
import '../styles/thankyou.css';

const ThankYou = () => {
    return (
        <div className="thank__you-wrapper mt-10">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="thank__you">
                            <span className="thank__you-icon">🎉</span>
                            <h1>Thank You!</h1>
                            <h3>Your tour is booked successfully.</h3>
                            <Button className="btn primary__btn w-25">
                                <Link to="/home" className="thank__you-link">Go to Home</Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Newsletter />
        </div>
    );
};

export default ThankYou;
