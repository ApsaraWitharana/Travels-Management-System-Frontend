import  "react";
import CommonSection from "../shared/CommonSection.tsx";
import '../styles/tour.css';
import TourCard from "../shared/TourCard.tsx";
import SearchBar from "../shared/SearchBar.tsx";
import Newsletter from "../shared/Newsletter.tsx";
import tourData from "/src/assets/data/tours.js";
import {Col, Container, Row} from "reactstrap";
import {useState,useEffect} from "react";


const Tours = () => {

    const [pageCount,setPageCount] = useState(0);
    const [page, setPage] = useState(0);

   useEffect(()=>{
       const pages = Math.ceil(5/4);
       setPageCount(pages);
   },[page])
    return (
        <>
        <CommonSection title={"All Tours"}/>
            <section>
                <Container>
                   <Row>
                       <SearchBar/>
                   </Row>
                </Container>
            </section>
            <section className='pt-0 pl-10 pr-10 mb-5 '>
                <Container>
                    <div className="grid mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tourData?.map((tour) => (
                            <TourCard key={tour.id} tour={tour}/>
                        ))}
                        <div className='pagination-col grid mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
                            <div className="pagination">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <span
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={page === number ? 'active__page' : ''}>
                                      {number + 1}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Newsletter/>
        </>
    );
};

export default Tours;