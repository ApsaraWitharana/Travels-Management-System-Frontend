import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../shared/CommonSection.tsx";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter.tsx";

const SearchResultList = () => {
    const location = useLocation();
    const [data] = useState(location.state || []);
    console.log(data);


    return (
        <>
            <CommonSection title="Tour Search Result" />
            <section className="ml-10">
                <Container>
                    <Row className="d-flex flex-wrap justify-content-center">
                        {data?.length === 0 ? (
                            <h3>No tour found</h3>
                        ) : (
                            data?.map((tour) => (
                                <Col lg="4" md="6" sm="12" className="mb-4 d-flex justify-content-center" key={tour._id}>
                                    <TourCard tour={tour} />
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    );
};


export default SearchResultList;
