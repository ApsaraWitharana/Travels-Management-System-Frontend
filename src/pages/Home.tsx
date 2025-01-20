import  "react";
import "../styles/home.css";
import heroimg from "../assets/images/heroimg.png";
import heroimg2 from "../assets/images/heroimg2.png";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle.tsx";
import SearchBar from "../shared/SearchBar.tsx";
import {Col, Container, Row} from "reactstrap";
import ServiceList from "../services/ServiceList.tsx";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList.tsx";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery.tsx";
import Testimonials from "../components/testimonial/Testimonials.tsx";
const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__container">
                    {/* Left: Content */}
                    <div className="hero__content">
                        <div className="hero__subtitle">
                            <Subtitle subtitle={"Know Before You Go"}/>
                            <img src={worldImg} alt="World"/>
                        </div>
                        <h1>
                            Traveling Opens the Door to
                            <h3>
                                Creating Special <span className="highlight">memories</span>
                            </h3>
                        </h1>
                        <p>
                            Embark on a journey to uncover breathtaking destinations, connect with amazing people, and
                            experience the beauty of the world. Whether you're seeking adventure, relaxation, or
                            cultural
                            exploration, let us guide you to unforgettable moments and cherished memories.
                        </p>
                    </div>

                    {/* Right: Images and Video */}
                    <div className="hero__media">
                        <img src={heroimg} alt="Hero 1" className="hero__image mb-5"/>
                        <video src={heroVideo} controls className="hero__video mt-4 mb-2"/>
                        <img src={heroimg2} alt="Hero 2" className="hero__image mt-7"/>
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-center ">
                <SearchBar/>
            </div>
            <section>
                <div className="d-flex justify-content-center">
                    <Row className='mt-0'>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className='services__title mt-0'>We offer our best services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </div>
            </section>
            {/*{============================== featured tour section start=====================}*/}
            <section>
                <Container>
                    <Row className='ml-14'>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={"What we serve?"}/>
                            <h2 className='featured__tour-title'>Our featured tours</h2>
                        </Col>
                        <FeaturedTourList/>
                    </Row>
                </Container>
            </section>
            {/*{============================== featured tour section end =====================}*/}
            {/*{============================== experience section start =====================}*/}
            <section>
                <Container className='mt-0'>
                    <Row className='ml-14 mt-0'>
                        <Col lg='6' className='mb-5 mt-0'>
                            <div className="experience__content">
                                <Subtitle subtitle={"Our experience"}/>
                                <h2>With our experience, <br/> we will serve you</h2>
                                <p>
                                    With years of expertise in providing top-notch services,<br/>
                                    our team is dedicated to delivering exceptional experiences<br/>
                                    tailored to your needs.
                                </p>
                            </div>
                            <div
                                className="counter__wrapper d-flex gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 ">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful travel</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>18k+</span>
                                    <h6>Year end experience</h6>
                                </div>
                                <div className="experience__img mt-0">
                                    <img src={experienceImg} alt=''/>
                                </div>
                            </div>
                        </Col>
                        {/*<Col lg='6' className='mb-5 mt-0'>*/}
                        {/*    <div className="experience__img mt-0">*/}
                        {/*        <img src={experienceImg} alt=''/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </section>
            {/*{============================== experience section end =====================}*/}
            {/*{============================== gallery section start =====================}*/}
            <section>
                <Container>
                    <Row className="ml-10 mr-10 mt-0 ">
                        <Col lg="6" className="mb-5 mt-5">
                            <Subtitle subtitle={"Gallery"}/>
                            <h2 className="gallery__title">
                                Visit our customer tour gallery
                            </h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*{============================== gallery section end =====================}*/}

            {/*{============================== testimonial section start =====================}*/}
            <section>
                <Container>
                    <Row className="ml-10 mr-10 mt-0  ">
                        <Col lg="12" className="mb-5 mt-5">
                          <Subtitle subtitle={"fans Love"}/>
                            <h2 className="testimonial__title">What our fans say about us</h2>
                        </Col>
                        <Col lg="12" >
                            <Testimonials/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*{============================== testimonial section end =====================}*/}



        </>
    );
};

export default Home;
