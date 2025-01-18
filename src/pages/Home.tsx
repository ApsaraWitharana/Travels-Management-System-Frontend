import  "react";
import "../styles/home.css";
import heroimg from "../assets/images/heroimg.png";
import heroimg2 from "../assets/images/heroimg2.png";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle.tsx";
import SearchBar from "../shared/SearchBar.tsx";
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
                    <p >
                        Embark on a journey to uncover breathtaking destinations, connect with amazing people, and
                        experience the beauty of the world. Whether you're seeking adventure, relaxation, or cultural
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
                <SearchBar />
            </div>
        </>
    );
};

export default Home;
