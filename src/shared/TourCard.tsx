import 'react';
import {Card,CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import './tour-card.css';
const TourCard = ({tour}:any)=>{

    const {id,title,photo,city,price,featured,avgRating,reviews} = tour;
    return (
        <div className="tour__card">
        <Card>
            <div className="tour__img ">
                <img src={photo} alt="tour-img"/>
                {featured && <span className="featured-badge">Featured</span>}
            </div>
        </Card>
            <CardBody>
                <div className="card__top d-flex flex-column align-items-center justify-content-between mb-3">
                    <span className='tour__location d-flex align-items-center gap-1'>
                      <i className="ri-map-pin-line"></i>{city}
                    </span>
                    {/*<span className='tour__rating d-flex align-items-center'>*/}
                    {/*  <i className="ri-star-fill"></i> {avgRating}*/}
                    {/*    <span>({reviews.length})</span>*/}
                    {/*</span>*/}
                </div>
                <h5 className="tour__title">
                    <Link to={`/tours/${id}`}>{title}</Link>
                </h5>
                <div className="card__bottom d-flex flex-column align-items-center justify-content-between mt-3">
                     <h5>${price} <span>/per person</span></h5>
                    <button className='btn booking__btn rounded-md'>
                        <li className='btn'>
                            <Link to={`/tours/${id}`}>book now</Link>
                        </li>
                    </button>
                </div>
            </CardBody>
        </div>
    )
}
export default TourCard;