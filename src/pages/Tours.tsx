import  "react";
import CommonSection from "../shared/CommonSection.tsx";
import '../styles/tour.css';
import TourCard from "../shared/TourCard.tsx";
import SearchBar from "../shared/SearchBar.tsx";
import Newsletter from "../shared/Newsletter.tsx";
import { Container, Row} from "reactstrap";
import {useState,useEffect} from "react";

import userFetch from "../hooks/userFetch.ts";
import {BASE_URL} from "../util/config.ts";


const Tours = () => {

    const [pageCount,setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const {data:tours,loading,error} = userFetch(`${BASE_URL}/tours?page=${page}`);
    const {data:tourCount} = userFetch(`${BASE_URL}/tours/search/getTourCount`);


    useEffect(()=>{
       const pages = Math.ceil(tourCount/8);
       setPageCount(pages);
       window.scrollTo(0,0);

   },[page,tourCount,tours]);

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
                    {loading && <h4 className='text-center pt-5'>Loading......</h4> }
                    {error && <h4 className='text-center pt-5'>{error}</h4> }

                        {
                            !loading && !error &&
                            <div className="grid mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {tours?.map((tour) => (
                                    <TourCard key={tour._id} tour={tour}/>
                                ))}
                                <div
                                    className='pagination-col grid mb-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
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
                        }
                    </Container>
            </section>
            <Newsletter/>
        </>
    );
};

export default Tours;