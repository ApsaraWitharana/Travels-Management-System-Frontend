import './SearchBar.css';
import search from "../../public/icon/search.png";
import { useRef } from "react";
import { BASE_URL } from "../util/config.ts";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const maxGroupSizeRef = useRef(null);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current?.value.trim();
        const distance = distanceRef.current?.value.trim();
        const maxGroupSize = maxGroupSizeRef.current?.value.trim();
        // Validate inputs
        if (!location || !distance || !maxGroupSize) {
            return alert('All fields are required');
        }

        try {
            const res = await fetch(
                `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
            );

            if (!res.ok) {
                throw new Error('Something went wrong!');
            }

            const result = await res.json();

            // Navigate to the search results page
            navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {
                state: result.data,
            });
        } catch (error) {
            console.error("Search error:", error);
            alert('Failed to fetch search results. Please try again.');
        }
    };

    return (
        <div className="search_bar">
            <div className="card-container flex flex-wrap justify-between gap-4">
                {/* Card 1 */}
                <div className="form__group card bg-white">
                    <div className="flex items-center">
                        <h6 className="text-lg font-bold text-gray-800">Location</h6>
                    </div>
                    <input
                        className="text-gray-600 w-full border rounded-full p-2"
                        type="text"
                        placeholder="Where are you going?"
                        ref={locationRef}
                    />
                </div>

                {/* Card 2 */}
                <div className="form__group card bg-white">
                    <div className="flex items-center">
                        <h6 className="text-lg font-bold text-gray-800">Distance</h6>
                    </div>
                    <input
                        className="text-gray-600 w-full border rounded-full p-2"
                        type="number"
                        placeholder="Distance (km)"
                        ref={distanceRef}
                    />
                </div>

                {/* Card 3 */}
                <div className="form__group card bg-white">
                    <div className="flex items-center">
                        <h6 className="text-lg font-bold text-gray-800">Max People</h6>
                    </div>
                    <input
                        className="text-gray-600 w-full border rounded-full p-2"
                        type="number"
                        placeholder="0"
                        ref={maxGroupSizeRef}
                    />
                </div>

                {/* Search Icon */}
                <span className="search__icon" onClick={searchHandler}>
                    <img src={search} alt="Search Icon" />
                </span>
            </div>
        </div>
    );
};

export default SearchBar;