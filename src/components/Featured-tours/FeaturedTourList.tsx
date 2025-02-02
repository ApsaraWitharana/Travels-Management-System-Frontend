import  'react';
import TourCard from "../../shared/TourCard";
import userFetch from "../../hooks/userFetch.ts";
import {BASE_URL} from "../../util/config.ts";


const FeaturedTourList= () => {

    const {data:featuredTours,loading,error} = userFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

   console.log(featuredTours);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                loading && <h4>Loading....</h4>
            }
            {
                error && <h4>{error}</h4>
            }
            {!loading && !error && featuredTours?.map((tour) => (
                <TourCard key={tour._id} tour={tour} />
            ))}
        </div>
    );
};

export default FeaturedTourList;
