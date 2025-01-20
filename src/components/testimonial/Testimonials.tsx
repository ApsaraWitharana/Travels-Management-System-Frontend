import  'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpeg';
import '../../styles/home.css'
const Testimonials = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="testimonials-slide d-flex gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 ">
            <Slider {...sliderSettings}>
                <div className="testimonial-slide d-flex justify-content-around align-items-start gap-4 ">
                    <div className="testimonial py-4 px-3">
                        <p>This service is fantastic! I had an amazing experience and would highly recommend it to
                            anyone looking for a seamless and enjoyable tour.</p>
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={ava01} alt="John Doe" className="avatar"/>
                            <div>
                                <h6 className="mb-0 mt-3">John Doe</h6>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="testimonial-slide d-flex justify-content-around align-items-start gap-4 ">
                <div className="testimonial py-4 px-3">
                    <p>This service is fantastic! I had an amazing experience and would highly recommend it to anyone
                        looking for a seamless and enjoyable tour.</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} alt="John Doe" className="avatar"/>
                        <div>
                            <h6 className="mb-0 mt-3">Alina Smith</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-slide d-flex justify-content-around align-items-start ">
                <div className="testimonial py-4 px-3">
                    <p>This service is fantastic! I had an amazing experience and would highly recommend it to anyone
                        looking for a seamless and enjoyable tour.</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava03} alt="John Doe" className="avatar"/>
                        <div>
                            <h6 className="mb-0 mt-3">Dill Till</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-slide d-flex justify-content-around align-items-start ">
                <div className="testimonial py-4 px-3">
                    <p>This service is fantastic! I had an amazing experience and would highly recommend it to anyone
                        looking for a seamless and enjoyable tour.</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava04} alt="John Doe" className="avatar"/>
                        <div>
                            <h6 className="mb-0 mt-3">Menu Hasi</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
