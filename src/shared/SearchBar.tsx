import  'react';
import './SearchBar.css';
import search from "../assets/icon/search.png";
const SearchBar = () => {
    return (
        <div className="search_bar">
            <div className="card-container flex flex-wrap justify-between gap-4">
                {/* Card 1 */}
                <div className="form__group card bg-white">
                    <div className="flex items-center">
                        <h6 className="text-lg font-bold text-gray-800">Location</h6>
                    </div>
                    <input className="text-gray-600 w-full border rounded-full" type="text" placeholder="Where are you going?"/>
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
                    />
                </div>
                {/* Search Icon */}
                <span className="search__icon">
                    <img src={search}/>
               </span>
            </div>
        </div>
    );
};

export default SearchBar;
