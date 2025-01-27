import 'react';
import {Route, Routes,Navigate} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Tours from "../pages/Tours.tsx";
import TourDetails from "../pages/TourDetails.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import SearchResultList from "../pages/SearchResultList.tsx";
import ThankYou from "../pages/ThankYou.tsx";

const Routers = () => {
    return(
        <Routes>
           <Route path="/" element={<Navigate to= '/home'/>}/>
            <Route path= "/home" element={<Home/>}/>
            <Route path= "/tours" element={<Tours/>}/>
            <Route path= "/tours/:id" element={<TourDetails/>}/>
            <Route path= "/login" element={<Login/>}/>
            <Route path= "/register" element={<Register/>}/>
            <Route path="/tours/:id/thank-you" element={<ThankYou />} />
            <Route path= "/tours/search" element={<SearchResultList/>}/>
        </Routes>
    )
}
export default Routers;