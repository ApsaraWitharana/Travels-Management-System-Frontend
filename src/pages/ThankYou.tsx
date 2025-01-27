import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/thankyou.css';

const ThankYou = () => {
    return (
        <div className="thank__you-wrapper">
            <Container>
                <Row className="align-items-center justify-content-center  ">
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
        </div>
    );
};

export default ThankYou;
