import './SearchBar.css';
import search from "../assets/icon/search.png";
import { useRef } from "react";

const SearchBar = () => {
    const locationRef = useRef<HTMLInputElement>(null);
    const distanceRef = useRef<HTMLInputElement>(null);
    const maxGroupSizeRef = useRef<HTMLInputElement>(null);

    const searchHandler = () => {
        const location = locationRef.current?.value.trim();
        const distance = distanceRef.current?.value.trim();
        const maxGroupSize = maxGroupSizeRef.current?.value.trim();

        // Validate inputs
        if (!location || !distance || !maxGroupSize) {
            return alert('All fields are required');
        }

        // Perform search logic here
        console.log("Location:", location);
        console.log("Distance:", distance);
        console.log("Max Group Size:", maxGroupSize);
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
                        className="text-gray-600 w-full border rounded-full"
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
