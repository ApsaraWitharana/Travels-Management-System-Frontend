import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle.tsx";
import '../styles/home.css'; // Import your CSS file

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'

const Home = () => {
    return (
        <div>
            {/*======hero section start =========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='hero__content'>
                                <div className='hero__subtitle'>
                                    <Subtitle subtitle={'Know Before You Go'}/>
                                    <img src={worldImg} alt=""/>
                                </div>
                                <h1>
                                    Traveling Opens the Door to<h3> Creating Special{" "}
                                    <span className='highlight'>memories</span>
                                    </h3>
                                </h1>
                                <p>
                                    Discover new destinations, meet incredible people, and explore the world with us.
                                    Discover new destinations, meet incredible people, and explore the world with us.
                                    Discover new destinations, meet incredible people, and explore the world with us.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*======hero section end =========*/}
        </div>
    );
}

export default Home;
