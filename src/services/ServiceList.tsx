import 'react';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard.tsx';
import './service-card.css';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Weather',
        desc: 'Get accurate and up-to-date weather forecasts for your travel destination.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Discover the best attractions and hidden gems with expert tour guidance.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Plan and customize your trips to suit your preferences and needs.',
    },
];


const ServiceList = () => {
    return (
        <div className="service__list mt-0">
            {servicesData.map((item, index) => (
                <Col key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </div>
    );
};

export default ServiceList;
