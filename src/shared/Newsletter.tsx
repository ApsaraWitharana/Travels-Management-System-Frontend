import  'react';
import './newsletter.css';
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
    return (
    <section className="hero" id="newslatter">
        <div className="hero__container">
            {/* Left: Content */}
            <div className="hero__content">
                <div className="newsletter__content">
                     <h2>Subscribe now to get useful traveling information.</h2>
                     <div className="newsletter__input">
                     <input type="email" placeholder="Enter your email"/>
                     <button type="submit" className="btn newsletter__btn">Subscribe</button>
                     </div>
                     <p>Stay updated with the latest travel guides, tips, and insights <br/>
                     to make your journeys unforgettable. Don't miss out!
                     </p>
                </div>
            </div>

            {/* Right: Images and Video */}
            <div className="text-center">
                <img src={maleTourist} alt="Traveler" className="newsletter__img"/>
            </div>
        </div>
    </section>
    );
};

export default Newsletter;
